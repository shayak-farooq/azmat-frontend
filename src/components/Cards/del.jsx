import productImage from "../../assets/Images/product.jpeg";
import { GrFormView } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa6";
import { useState } from "react";
function SingleProduct(props) {
  const[view,setView] = useState({
    desktopView:true,
    mobileView:false,
    quickView:false
  })
  // const desktopView = props.desktopView;
  // const mobileView = props.mobileView;
  // const quickView = props.quickView;
  return (
    <>
      <div
        className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
      >
        {/* Product image */}
        <div
          className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""} w-[200px] h-[200px] bg-black`}
        >
          <img
            // src={productImage}
            alt=""
            className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
          />
        </div>
        {/* Product details */}
        <div
          className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
        >
          {/* Name ,price,desc etc */}
          <div
            className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
          >
            <h2>Name</h2>
            <span>Price</span>
            <span>★★★★★</span>
            <p className="">desc</p>
          </div>
          {/* Buttons */}
          <div>
            <div
              className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
            >
              {/* quickview */}
              <button
                className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
              >
                <GrFormView
                  className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
                />
              </button>
            </div>
            <div
              className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
            >
              {/* cart */}
              <button
                className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
              >
                <FaCartPlus
                  className={`
            ${desktopView ? "" : ""}
            ${mobileView ? "" : ""}
            ${quickView ? "" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
