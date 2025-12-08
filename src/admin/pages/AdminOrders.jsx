import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminOrders = () => {
  return (
    <>
    <div className="w-screen bg-gray-300">    
      <div className="flex flex-col gap-4 m-10 p-10 rounded-2xl bg-white">
        {/* heading */}
        <div className="flex justify-between">
          <h4>Orders</h4>
          <NavLink to='/admin/addorder' className='bg-blue-700 text-white border-3 border-blue-700 rounded-xl p-2 mr-3 '>Add Order</NavLink>
        </div>
        {/* Search Bar and filters */}
        <div></div>
        <div>
          <table className="w-full">
            <thead className="text-left border-b border-zinc-300">
              <tr className="*:p-2">
                <th>Order no</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Payment method</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
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
  )
}

export default AdminOrders