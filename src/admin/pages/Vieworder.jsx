import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Vieworder() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [order, setorder] = useState(
    {
    "deliveryDate": {
        "expectedDeliveryDate": "2026-01-09T09:40:52.578Z"
    },
    "address": {
         "building": "",
                "area": "",
                "landmark": "",
                "city": "",
                "state": "",
                "pincode": "",
                "country": "",
                "phone": 0,
    },
    "user": {
        "name": "",
        "email": "",
        "role": "",
        "phone": [],
        
    },
    "productdetails": [
        {
            "priceDetails": {
                "sellingPrice": 0,
                "shippingCharges": 0,
                "otherCharges": 0
            },
            "productid": "",
            "quantity": 0,
            "TotalProductPrice": 0,
        }
    ],
    "totalOrderPrice": 0,
    "status": "",
    "paymentMethod": "",
});
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    fetch(`http://localhost:3000/api/admin/singleorder/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result.order);
        setorder(result.order);
        
      })
      .catch((err) => console.error(err));
  }, []);

  async function handleStatuschange(e) {
    const newStatus = e.target.value;
    if(newStatus == 'Select') return
    console.log(newStatus)
    const token = localStorage.getItem("bearer");
    await fetch(`http://localhost:3000/api/admin/singleorder/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ status: newStatus })
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setorder(result.order)
        navigate(0);
      })
      .catch((err) => console.error(err));
  }
  return (
    <>
      {order && (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Order Details
          </h1>

          {/* Order Status */}
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="font-semibold text-lg">Order Status:</h2>
              <p className="text-green-600">{order.status}</p>

              <select hidden={order.status == 'Delivered'} name="status" id="status" onChange={handleStatuschange}>
                <option value="Select">Select</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered" >Delivered</option>
              </select>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Payment Method:</h2>
              <p>{order.paymentMethod}</p>
            </div>
          </div>

          {/* Delivery Date */}
          <div className="mb-6 flex justify-between">
            <div>
              <h2 className="font-semibold text-lg">Expected Delivery Date:</h2>
              <p>
                {new Date(
                  order.deliveryDate?.expectedDeliveryDate   
                ).toLocaleDateString()}
              </p>
            </div>
            {order.deliveryDate?.actualDeliveryDate ? (
              <div>
                <h2 className="font-semibold text-lg">Actual Delivery Date:</h2>
                <p>
                  {new Date(
                    order.deliveryDate.actualDeliveryDate
                  ).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          {/* Address */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Delivery Address:</h2>
            <p>
              {order.address.building}, {order.address.area},{" "}
              {order.address.city}, {order.address.state},{" "}
              {order.address.pincode}, {order.address.country}
            </p>
            <p>Landmark: {order.address.landmark}</p>
            <p>Phone: {order.address.phone}</p>
          </div>

          {/* User Details */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg">User Information:</h2>
            <p>
              <strong>Name:</strong> {order.user.name}
            </p>
            <p>
              <strong>Email:</strong> {order.user.email}
            </p>
            <p>
              <strong>Phone:</strong> {order.user.phone.join(", ")}
            </p>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Product Details:</h2>
            {order.productdetails.map((product, index) => (
              <div key={index} className="mb-4">
                <p>
                  <strong>Product ID:</strong> {product.productid}
                </p>
                <p>
                  <strong>Selling Price:</strong> ₹
                  {product.priceDetails.sellingPrice}
                </p>
                <p>
                  <strong>Quantity:</strong> {product.quantity}
                </p>
                <p>
                  <strong>Total Price:</strong> ₹{product.TotalProductPrice}
                </p>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="flex justify-between text-xl font-semibold">
            <span>Total Order Price:</span>
            <span>₹{order.totalOrderPrice}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(Vieworder);
