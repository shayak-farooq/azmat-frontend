import React, { useEffect, useState } from "react";

function Orders() {
  const [products, setProducts] = useState([]);
  console.log("length", products.length, products);
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
        console.log(result.orders);
        const allproducts = result.orders.flatMap((item) =>
          item.productdetails.map((product) => ({
            ...product,
            orderStatus: item.status,
            deliveryDate: item.deliveryDate.expectedDeliveryDate,
          }))
        );
        setProducts(allproducts);
        console.log("allproducts", allproducts);
        console.log(products);
      });
  }, []);
  return (
    <>
      {/* {orders.map(item =>(
      <div key={item._id}>

      </div>
    ))} */}

      <div className="flex items-center mt-40 border mx-auto w-4/5 justify-between">
        <div>
          image
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex flex-col">
          <span>name</span>
          <span>Weight</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>order status</div>
        <div>
          <span>delivery Date</span>
        </div>
      </div>
      {products.length != 0 &&
        products.map((item) => (
          <div key={item._id} className="flex items-center mt-4 rounded border border-zinc-400 mx-auto w-4/5 justify-between">
            <div>
              image
              {/* <img src="" alt="" /> */}
            </div>
            <div className="flex flex-col">
              <span>{item.productid.title}</span>
              <span>Weight</span>
            </div>
            <div>
              <span>{item.priceDetails.sellingPrice}</span>
            </div>
            <div>{item.orderStatus}</div>
            <div>
              <span>{item.deliveryDate}</span>
            </div>
          </div>
          // <div key={item._id}>
          // <p>{item.productid.title}</p>
          // <p>{item.priceDetails.TotalPriceDetails}</p>
          // </div>
        ))}
    </>
  );
}

export default React.memo(Orders);
