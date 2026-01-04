import productImage from "../../assets/Images/product.jpeg";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import QuickView from "./QuickView";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  const totalStars = 5;

  return (
    <div className="flex justify-center text-amber-500">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return <FaStar key={index} />;
        } else if (rating >= starValue - 0.5) {
          return <FaStarHalfAlt key={index} />;
        } else {
          return <FaRegStar key={index} />;
        }
      })}
    </div>
  );
}

function SingleProduct(props) {
  const [hidden, setHidden] = useState(true);
  const [item, setItem] = useState({
    state: false,
    text: "",
  });
  async function addToCart(productid) {
    console.log("stock", props.instock);
    if (props.instock == 0) {
      console.log("out of stock");
      setItem({ state: true, text: "item is currently out of stock" });
      setTimeout(() => {
        setItem((prev) => ({ ...prev, state: false }));
      }, 4000);
      return;
    }
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
    // console.log(response);
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
    if (response.status == 401) {
      setItem({ state: true, text: "Login First" });
      setTimeout(() => {
        setItem((prev) => ({ ...prev, state: false }));
      }, 4000);
    }
    const result = await response.json();
    // console.log(result);
  }
  // console.log("images",props.images[0])
  return (
    <>
      <QuickView
        hidden={hidden}
        setHidden={setHidden}
        addToCart={addToCart}
        productid={props.productid}
        item={item}
        title={props.title}
        price={props.price}
        images={props.images}
      />
      <div className=" mx-4 my-3 group relative">
        {/* Product image */}
        <div className="flex items-center justify-center">
          {item.state && (
            //Todo background should be blured
            <div className="absolute bg-white opacity-80 border border-gray-400 rounded-xl py-2 px-7">
              {item.text}
            </div>
          )}
          {/* <img src={productImage} alt="" className="" /> */}
          <div className="">
            <img
              src={`http://localhost:3000/images/${props.images[0]}`}
              alt="product image"
              className="rounded-xl border h-72 w-60 border-zinc-300"
            />
          </div>
        </div>
        {/* Product details */}
        <div>
          {/* Name ,price,desc etc */}
          <div className=" text-center flex flex-col">
            <h2>{props.title}</h2>
            <span>{props.price}</span>
            {/* <span>★★★★★</span> */}
            <StarRating rating={props.rating} />
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
