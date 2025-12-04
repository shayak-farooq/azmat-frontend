import React from "react";

function Product_filters() {
  return (
    <>
      <div>
        <div className="mb-7 border-b border-zinc-400 pb-8">
          <h4 className="mb-7 text-xl font-normal">Filters</h4>
          <span className="text-base text-[#333333]">10 Products</span>
        </div>
        {/* Availability */}
        <div className="mb-7 border-b border-zinc-400 pb-8">
          <h6 className="mb-7 text-xl font-normal">Availability</h6>
          <div className="flex justify-between">
            <div>0 selected</div>
            <button>Reset</button>
          </div>
          <div>
            <ul>
              <li className="flex group pt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-amber-600 scale-125"
                />
                <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                  <span>In stock</span>
                  <span>(10)</span>
                </button>
              </li>
              <li className="flex group pt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-amber-600 scale-125"
                />
                <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                  <span>Out of stock</span>
                  <span>(0)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Price filter */}
        <div className="mb-7 border-b border-zinc-400 pb-8">
          <h6 className="mb-7 text-xl font-normal">Price</h6>
          <div className="flex justify-between">
            <h4 className="">the highest price is 2000</h4>
            <button>Reset</button>
          </div>
          {/* Slider */}
          <div className="pt-3">
            <input type="range" min={0} max={1000} className="w-full " />
          </div>
          {/* Inputs */}
          <div className="flex">
            <div>
              <label htmlFor="">from</label>
              <input type="number" name="" id="" className="bg-white" />
            </div>
            <div>
              <label htmlFor="">to</label>
              <input type="number" name="" id="" className="bg-white" />
            </div>
          </div>
        </div>
        {/* Category */}
        <div className="mb-7 border-b border-zinc-400 pb-8">
          <h6 className="mb-7 text-xl font-normal">Category</h6>
          <div className="flex justify-between">
            <div>0 selected</div>
            <button>Reset</button>
          </div>
          <div>
            <ul>
              <li className="flex group pt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-amber-600 scale-125"
                />
                <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                  <span>Honey</span>
                  <span>(10)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Size */}
        <div className="mb-7 border-b border-zinc-400 pb-8">
          <h6 className="mb-7 text-xl font-normal">Size</h6>
          <div className="flex justify-between">
            <div>0 selected</div>
            <button>Reset</button>
          </div>
          <div>
            <ul>
              <li className="flex group pt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-amber-600 scale-125"
                />
                <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                  <span>100gm</span>
                  <span>(10)</span>
                </button>
              </li>
              <li className="flex group pt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-amber-600 scale-125"
                />
                <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                  <span>250gm</span>
                  <span>(10)</span>
                </button>
              </li>
              <li className="flex group pt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-amber-600 scale-125"
                />
                <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                  <span>500gm</span>
                  <span>(10)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_filters;
