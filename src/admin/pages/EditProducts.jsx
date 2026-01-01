import React, { useEffect, useState } from "react";
import { GrGallery } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";

function EditProducts() {
  const [err, setErr] = useState("");
  const [newImages, setNewImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    title: "",
    batchNo: "",
    desc: "",
    price: "",
    inStock: "",
    discount:'',
    productImages: [],
  });
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    fetch(`http://localhost:3000/api/products/singleproduct/${id}`, {
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
        console.log(result.product);
        setData(result.product);
      })
      .catch((err) => console.error(err));
  }, []);
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("batchNo", data.batchNo);
    formData.append("desc", data.desc);
    formData.append("price", data.price);
    formData.append("inStock", data.inStock);
    formData.append("discount", data.discount);

    data.productImages.forEach((img)=>{
      formData.append("Product_Images", img)
    })

    newImages.forEach((img)=>{
      formData.append("NewImages", img)
    })
    console.log(formData);
    const token = localStorage.getItem("bearer");
    const response = await fetch(
      `http://localhost:3000/api/products/updateproduct/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    const result = await response.json();
    console.log(result);
    if (response.status == 200) {
      navigate("/admin/products");
    }
    if (response.status != 200) {
      console.log(result.err);
      setErr(result.err);
    }
  }
    function handleImageChange(e) {
    const newFiles = [...e.target.files];
    setNewImages((prevImages) => {
      const merged = [...prevImages, ...newFiles];
      setPreviews(merged.map((file) => URL.createObjectURL(file)));
      return merged;
    });
  }
  function removeImage(index){
    const newimages = data.productImages.filter((_,i)=> i !== index)
    setData(prev => ({...prev,productImages:newimages}))
  }
  function removeNewImage(index){
    const newimage = newImages.filter((_,i)=> i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)
    setNewImages(newimage)
    setPreviews(newPreviews)
  }
  return (
    <>
      <div className="w-screen bg-gray-300">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h4 className="text-xl font-bold pt-8 pl-8">Add product</h4>
          <div className="flex m-5 px-3 gap-2 ">
            {/* Leftside */}
            <div className="flex flex-col flex-2 gap-2 ">
              {/* Basic info */}
              <div className="bg-white rounded-2xl p-4">
                <h4>Basic Information</h4>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="title">Product name</label>
                    <input
                      className="bg-gray-100 rounded-xl p-2 "
                      type="text"
                      name="title"
                      id="title"
                      value={data.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="batchNo">Batch Number</label>
                    <input
                      className="bg-gray-100 rounded-xl p-2 "
                      type="text"
                      name="batchNo"
                      value={data.batchNo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="desc">Description</label>
                    <textarea
                      className="bg-gray-100 rounded-xl p-2 "
                      rows={5}
                      type="text"
                      name="desc"
                      value={data.desc}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* Pricing */}
              <div className="bg-white rounded-2xl p-4">
                <h4>Pricing</h4>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label htmlFor="price">Price</label>
                      <input
                        className="bg-gray-100 rounded-xl p-2 "
                        type="number"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                      />
                      <label htmlFor="price">Discount <p className="text-xs">Don't add % add number only</p> </label>
                      <input
                        className="bg-gray-100 rounded-xl p-2 "
                        type="number"
                        name="discount"
                        value={data.discount}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="flex flex-col">
                      <label htmlFor="name">Cost Price</label>
                      <input
                        className="bg-gray-100 rounded-xl p-2 "
                        type="text"
                        name="name"
                        id=" "
                      />
                    </div> */}
                    {/* </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label htmlFor="name">Retail Price</label>
                      <input
                        className="bg-gray-100 rounded-xl p-2 "
                        type="text"
                        name="name"
                        id=" "
                      />
                    </div> */}
                    {/* <div className="flex flex-col">
                      <label htmlFor="name">Sale Price</label>
                      <input
                        className="bg-gray-100 rounded-xl p-2 "
                        type="text"
                        name="name"
                        id=" "
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              {err && (
                <div className="flex flex-col">
                  <div className="bg-white rounded-2xl p-4">
                    <h1 className="text-red-400 text-xs">{err}</h1>
                  </div>
                </div>
              )}
            </div>
            {/* right side */}
            <div className="flex flex-col flex-1 gap-2 ">
              <div className="bg-white rounded-2xl p-4">
                <h4>Product Image</h4>
                <span>
                  Choose a product photo or simply drag and drop up to 5 photos
                  here.
                </span>
                {data.productImages.length !== 0 && (
                  <div className="grid grid-cols-3 gap-3 my-4">
                    {data.productImages.map((image,index) => (
                      <div key={index}  className="relative">
                        <img
                          src={`http://localhost:3000/images/${image}`}
                          alt="preview"
                          className="w-full h-28 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-white text-xs rounded-full px-2.5 py-2"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {previews.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 my-4">
                    {previews.map((src, index) => (
                      <div key={index} className="relative">
                        <img
                          src={src}
                          alt="preview"
                          className="w-full h-28 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeNewImage(index)}
                          className="absolute top-1 right-1 bg-white text-xs rounded-full px-2.5 py-2"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col items-center py-10 rounded-2xl border-2 border-gray-300 hover:border-blue-400 hover:border-2 border-dashed relative">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="w-full h-full cursor-pointer opacity-0 absolute"
                  />
                  <div className="w-1/2 flex flex-col items-center">
                    <GrGallery className="text-3xl" />
                    <p>Drop your image here, or</p>
                    <p>Click to browse</p>
                  </div>
                </div>
                <div>
                  <p>
                    Image formats: .jpg, .jpeg, .png, preferred size: 1:1, file
                    size is restricted to a maximum of 500kb.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <h4>Attribute</h4>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="inStock">Available in stock</label>
                    <input
                      className="bg-gray-100 rounded-xl p-2 "
                      type="number"
                      name="inStock"
                      value={data.inStock}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end bg-white bottom-0 p-5">
            <button
              type="submit"
              onClick={() => {
                handleSubmit;
              }}
              className="bg-blue-700 text-white border-3 border-blue-700 rounded-xl p-2 mr-3 "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default React.memo(EditProducts);
