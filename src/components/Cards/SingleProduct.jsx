import productImage from "../../assets/Images/product.jpeg";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

function SingleProduct() {
  const [view, setView] = useState({
    desktopView: true,
    mobileView: false,
    quickView: false,
  });
  return (
    <>
      <div className="w-1/4 mx-4 my-3 group relative">
        {/* Product image */}
        <div className="">
          {/* <img src={productImage} alt="" className="" /> */}
          <img
            src="https://qx-honee.myshopify.com/cdn/shop/files/honey-pro-10.jpg?crop=center&height=775&v=1726038686&width=645"
            alt="product image"
            className="rounded-xl border border-zinc-300"
          />
          
        </div>
        {/* Product details */}
        <div>
          {/* Name ,price,desc etc */}
          <div className=" text-center flex flex-col">
            <h2>Name</h2>
            <span>Price</span>
            <span>★★★★★</span>
            <p className="md:hidden">desc</p>
          </div>
          {/* Buttons */}
          <div className="flex justify-center items-center w-full lg:absolute bottom-24 opacity-100 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <button className="px-4 py-3 bg-amber-600 rounded-xl uppercase font-medium text-white mr-3 transition-all duration-500 ease-in-out hover:bg-zinc-700">
              <span className="lg:block hidden">Add to cart</span>
              <span className="lg:hidden"><MdOutlineShoppingCart/></span>
            </button>
            <button className="bg-brand bg-white py-3 px-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-amber-600 hover:text-white"><IoEyeOutline/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
