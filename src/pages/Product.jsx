import SingleProduct from "../components/Cards/SingleProduct";
import { useEffect, useState } from "react";
import Product_catagories from "../components/Cards/Product_catagories";
import Product_filters from "../components/Cards/Product_filters";

function Products() {
  const [islistView, setListView] = useState(false);
  const [products,setProducts] = useState()
  useEffect(()=>{
    fetch('http://localhost:3000/api/products',{
      method:'GET',
      headers:{'content-type':'application/json'}
    })
    .then(response=>{
      console.log(response);
      return response.json()
    })
    .then(data =>{
      console.log('products',data.products);
      setProducts(data.products)
    })
  },[]);

  return (
    <>
      <section className="relative bg-brand flex lg:px-32 lg:py-24 md:p-10">
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
              {products != undefined ? products.map(item =>(
                <SingleProduct key={item._id}
                productid={item._id}
                instock = {item.inStock}
                title={item.title}
                price={item.price} 
                rating ={item.Rating}
                desc={item.desc}
                images ={item.productImages}
                />

              )):(<div>no data available</div>)}
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
