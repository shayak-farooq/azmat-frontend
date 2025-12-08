import React from "react";
import { NavLink } from "react-router-dom";

const AdminProducts = () => {
  return (
    <>
    <div className="w-screen bg-gray-300">    
      <div className="flex flex-col gap-4 m-10 p-10 rounded-2xl bg-white">
        {/* heading */}
        <div className="flex justify-between">
          <h4>Products</h4>
          <NavLink to='/admin/addproduct' className='bg-blue-700 text-white border-3 border-blue-700 rounded-xl p-2 mr-3 '>Add Products</NavLink>
        </div>
        {/* Search Bar and filters */}
        <div></div>
        <div>
          <table className="w-full">
            <thead className="text-left border-b border-zinc-300">
              <tr className="*:p-2">
                <th>S.no</th>
                <th>Products</th>
                <th>price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-zinc-300 *:p-2">
                <td>1</td>
                <td>honey</td>
                <td>500</td>
                <td>10</td>
                <td>5</td>
                <td>
                  <button className="mr-2">Edit</button>
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

export default AdminProducts;
