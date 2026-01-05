import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();
  function formatDateTime(date) {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // hour12: true,
    });
  }

  useEffect(() => {
    const token = localStorage.getItem("bearer");
    if (token == null) {
      Navigate("/login");
      return;
    }
    fetch("http://localhost:3000/api/orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.orders);
        const allproducts = result.orders.flatMap((item) =>
          item.productdetails.map((product) => ({
            ...product,
            orderStatus: item.status,
            actualDeliveryDate: item.deliveryDate?.actualDeliveryDate,
            expectedDeliveryDate: item.deliveryDate?.expectedDeliveryDate,
          }))
        );
        setProducts(allproducts);
        // console.log("allproducts", allproducts);
        // console.log(products);
      });
  }, []);
  return (
    <>
      {products.length != 0 ? (
        products.map((item, index) => (
          <div
            key={item._id}
            className="flex items-center gap-5 md:gap-2 p-2 mt-4 rounded border border-zinc-400 mx-auto w-4/5"
          >
            <div>
              <img
                className="w-20 h-20 rounded"
                src={`http://localhost:3000/images/${products[index].productid.productImages[0]}`}
                alt=""
              />
            </div>
            <div className="md:flex justify-between md:w-full">
              <div className="flex flex-col">
                <span>Name: {item.productid.title}</span>
                <span>
                  {item.productid.netWeight < 3
                    ? `${item.productid.netWeight} Kg`
                    : item.productid.netWeight > 100
                    ? `${item.productid.netWeight} gm`
                    : `${item.productid.netWeight} Kg`}
                </span>
              </div>
              <div>
                <span>Price: {item.priceDetails.sellingPrice}</span>
              </div>
              <div>Status: {item.orderStatus}</div>
              <div>
                {item.actualDeliveryDate ? (
                  <span>
                    Delivery Date: {formatDateTime(item.actualDeliveryDate)}
                  </span>
                ) : (
                  <span>
                    Expected Delivery Date:{" "}
                    {formatDateTime(item.expectedDeliveryDate)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-2xl p-32">
          <span className="border p-5  rounded-2xl border-gray-400">
            You haven’t placed any orders yet.
          </span>
        </div>
      )}
    </>
  );
}

export default React.memo(Orders);
