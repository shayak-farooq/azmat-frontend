import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [index,setIndex] = useState(0)
  const [page, setPage] = useState(1)
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    if (token == null) {
      navigate("/login");
    } else {
      fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data", data.products);
          setProducts(data.products);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  async function handleEdit(productid){
   navigate(`/admin/editproduct/id=${productid}`)
  }
  async function handleDelete(productid){
    const token = localStorage.getItem("bearer");
    const response = await fetch(`http://localhost:3000/api/products/deleteproduct/id=${productid}`, {
        method: "delete",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      console.log(response);
      // TODO: what to do after delete
      // const result = await response.json()
  }
  return (
    <>
      <div className="w-screen bg-gray-300">
        <div className="flex flex-col gap-4 m-10 p-10 rounded-2xl bg-white">
          {/* heading */}
          <div className="flex justify-between">
            <h4>Products</h4>
            <NavLink
              to="/admin/addproduct"
              className="bg-blue-700 text-white border-3 border-blue-700 rounded-xl p-2 mr-3 "
            >
              Add Products
            </NavLink>
          </div>
          {/* Search Bar and filters */}
          <div></div>
          <div>
            <table className="w-full">
              <thead className="text-left border-b border-zinc-300">
                <tr className="*:p-2">
                  <th>S.no</th>
                  <th>Products</th>
                  <th>Batch No</th>
                  <th>price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th></th>
                </tr>
              </thead>
              {products  ? (
                <tbody>
                  {products.slice(index, index + 10).map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.batchNo}</td>
                      <td>{item.price}</td>
                      <td>{item.inStock}</td>
                      <td>{item.Rating}</td>
                      <td>
                        <button className="mr-2 hover:cursor-pointer" onClick={()=>{handleEdit(item._id)}}>Edit</button>
                        <button className="hover:cursor-pointer" onClick={()=>{handleDelete(item._id)}}>delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>no data available</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          <div className="flex items-center justify-center">
            <button className="font-black bg-black text-white p-2 rounded m-2 hover:cursor-pointer disabled:bg-gray-500" onClick={()=> {setIndex(index-10);setPage(page-1)}} disabled={index === 0}>&lt;</button>
            <div>{page}</div>
            <button className="font-black bg-black text-white p-2 rounded m-2 hover:cursor-pointer disabled:bg-gray-500" onClick={()=> {setIndex(index+10);setPage(page+1)}} disabled={index +10 >= products.length}>&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
