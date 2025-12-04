import SingleProduct from "../components/Cards/SingleProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Product_catagories from "../components/Cards/Product_catagories";
import Product_filters from "../components/Cards/Product_filters";

function Products() {
  const [islistView, setListView] = useState(false);
  return (
    <>
      <section className="bg-brand flex lg:px-32 lg:py-24 md:p-10">
        {/* left section --> filters etc */}
        <section className="mx-3 w-1/5">
          <Product_catagories/>
          <Product_filters/>
        </section>
        {/* right section -->all products */}
        <section className="flex-2">
          <div className="pb-4 border-b border-zinc-300">
            <button
              onClick={() => {
                setListView(!islistView);
              }}
            >
              {islistView ? "Grid View" : "List View"}
            </button>
          </div>
          <div className="flex flex-wrap ">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
          {/* <div className="m-2 flex">
            <div className="">
              <img src="" alt="Product image" />
            </div>
            <div>
              <h2>Name/title</h2>
              <span>Rs:100</span>
              <span>★★★★★</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur{" "}
              </p>
            </div>
          </div> */}
        </section>
      </section>
    </>
  );
}
export default Products;
