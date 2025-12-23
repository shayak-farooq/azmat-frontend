import productImage from "../../assets/Images/product.jpeg";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import QuickView from "./QuickView";

function SingleProduct(props) {
  const [hidden, setHidden] = useState(true);
  const [item, setItem] = useState({
    state: false,
    text: "",
  });
  async function addToCart(productid) {
    const token = localStorage.getItem("bearer");
    console.log(token);
    console.log(productid);
    const response = await fetch("http://localhost:3000/api/cart/addtocart", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ productid }),
    });
    console.log(response);
    //TODO after response ??
    if (response.status == 200) {
      setItem({ state: true, text: "item already in cart" });
      setTimeout(() => {
        setItem((prev) => ({ ...prev, state: false }));
      }, 4000);
    }
    if (response.status == 201) {
      setItem({ state: true, text: "item added to cart" });
      setTimeout(() => {
        setItem((prev) => ({ ...prev, state: false }));
      }, 4000);
    }
    const result = await response.json();
    console.log(result);
  }
  return (
    <>
      <QuickView hidden={hidden} setHidden={setHidden} />
      <div className="w-1/4 mx-4 my-3 group relative">
        {/* Product image */}
        <div className="flex items-center justify-center">
          {item.state ? (
            //Todo background should be blured
            <div className="absolute bg-white opacity-80 border border-gray-400 rounded-xl py-2 px-7">
              {item.text}
            </div>
          ) : (
            <div className="hidden"></div>
          )}
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
            <h2>{props.title}</h2>
            <span>{props.price}</span>
            {/* <span>★★★★★</span> */}
            <span>{props.rating}</span>
            <p className="md:hidden">{props.desc}</p>
          </div>
          {/* Buttons */}
          <div className="flex justify-center items-center w-full lg:absolute bottom-24 opacity-100 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <button
              onClick={() => {
                addToCart(props.productid);
              }}
              className="px-4 py-3 bg-amber-600 rounded-xl uppercase font-medium text-white mr-3 transition-all duration-500 ease-in-out hover:bg-zinc-700"
            >
              <span className="lg:block hidden">Add to cart</span>
              <span className="lg:hidden">
                <MdOutlineShoppingCart />
              </span>
            </button>
            <button
              onClick={() => setHidden(!hidden)}
              className="bg-brand bg-white py-3 px-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-amber-600 hover:text-white"
            >
              <IoEyeOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
