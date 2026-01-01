import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    fetch("http://localhost:3000/api/admin/orders", {
      method: "GET",
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.orders);
        setOrders(result.orders);
      })
      .catch((err) => console.log(err));
  }, []);
  function HandleViewbtn(id){
    navigate(`/admin/order/${id}`)
  }
  return (
    <>
      <div className="w-screen bg-gray-300">
        <div className="flex flex-col gap-4 m-10 p-10 rounded-2xl bg-white">
          {/* heading */}
          <div className="flex justify-between">
            <h4>Orders</h4>
          </div>
          {/* Search Bar and filters */}
          <div></div>
          <div>
            <table className="w-full">
              <thead className="text-left border-b border-zinc-300">
                <tr className="*:p-2">
                  <th>S No. </th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total order Price</th>
                  <th>Payment method</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              {
                <tbody className="">
                  {orders.length !== 0 &&
                    orders.map((order, index) => (
                      <tr
                        key={order._id}
                        className="border-b border-zinc-300 *:p-2"
                      >
                        <td>{index + 1}</td>
                        <td>
                          <p>{order.user.name}</p>
                          <p>{order.user.email}</p>
                          <p>{order.address.phone}</p>
                        </td>
                        <td>
                          <div className="flex gap-1 font-medium ">
                            <p>{order.address.area}</p>
                            <p>{order.address.city}</p>
                          </div>
                          <div className="flex gap-1 text-xs">
                            <p>{order.address.state}</p>
                            <p>{order.address.country}</p>
                            <p>{order.address.pincode}</p>
                          </div>
                        </td>
                        <td>{order.totalOrderPrice}</td>
                        <td>{order.paymentMethod}</td>
                        <td>{order.status}</td>
                        <td>
                          <button onClick={()=>{HandleViewbtn(order._id)}} className="mr-2 hover:cursor-pointer">View/Edit</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              }
              <tbody className="">
                <tr className="border-b border-zinc-300 *:p-2">
                  <td>#2134</td>
                  <td>
                    <p>Shayak farooq</p>
                    <span>email@example.com</span>
                  </td>
                  <td>500</td>
                  <td>UPI</td>
                  <td>pending</td>
                  <td>
                    <button className="mr-2">View</button>
                    <button>delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
