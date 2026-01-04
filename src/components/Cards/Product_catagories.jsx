import React from "react";

function Product_catagories() {
  return (
    <>
      <div className=" pointer-events-none opacity-60 mb-7 border-b border-zinc-400 pb-8">
        <h6 className="text-xl font-normal">Categories</h6>
        <div className="mt-7">
          <ul>
            <li className="flex group">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 accent-amber-600 scale-125"
              />
              <button className="flex justify-between w-full text-base text-[#333333] group-hover:text-amber-600">
                <span>Bestseller</span>
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
                <span>Buckwheat honey</span>
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
                <span>Eucalyptus honey</span>
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
                <span>Feature product</span>
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
                <span>Manuka honey</span>
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
                <span>New product</span>
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
                <span>Wildflower honey</span>
                <span>(10)</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Product_catagories;
