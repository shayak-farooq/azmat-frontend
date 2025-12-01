import productImage from "../../assets/Images/product.jpeg";
import { useState } from "react";

function SingleProduct() {
   const[view,setView] = useState({
    desktopView:true,
    mobileView:false,
    quickView:false
  })
  return (
    <>
        <div>
          {/* Product image */}
          <div className={`
            ${view.desktopView ? "w-1/3" : ""}
            ${view.mobileView ? "" : ""}
            ${view.quickView ? "" : ""}`}>
              <img
            src={productImage}
            alt=""
            className={`
            ${view.desktopView ? "" : ""}
            ${view.mobileView ? "" : ""}
            ${view.quickView ? "" : ""}`}
          />
            </div>
          {/* Product details */}
          <div>
            {/* Name ,price,desc etc */}
            <div
            className={`
            ${view.desktopView ? "" : ""}
            ${view.mobileView ? "" : ""}
            ${view.quickView ? "" : ""}`}
          >
            <h2>Name</h2>
            <span>Price</span>
            <span>★★★★★</span>
            <p className="">desc</p>
          </div>
            {/* Buttons */}
            <div></div>
          </div>
        </div>
    </>
  )
}

export default SingleProduct