import { useState, useEffect } from "react";
import About_product from "../components/Cards/About_product";
import SingleProduct from "../components/Cards/SingleProduct.jsx";
function Home() {
  const [slideindex, setSlideIndex] = useState(0);
  const [products,setProducts] = useState([])
  const slides = [
    {
      heading: "100% NATURAL HONEY",
      description:
        "Sweetness in every drop, sourced from organic beehives with no additives.",
      image:
        "https://qx-honee.myshopify.com/cdn/shop/files/slider-1.jpg?v=1725941461&width=1920",
      hoverImage:
        "https://static.vecteezy.com/system/resources/previews/030/639/575/large_2x/honey-image-hd-free-photo.jpg",
    },
    {
      heading: "PURE ORGANIC HONEY",
      description:
        "Experience the golden nectar straight from nature's finest hives.",
      image:
        "https://qx-honee.myshopify.com/cdn/shop/files/slider-2.jpg?v=1725962897&width=1920",
      hoverImage:
        "https://qx-honee.myshopify.com/cdn/shop/files/mobile-slider-1.jpg?v=1725963823&width=1024",
    },
    {
      heading: "RAW WILD HONEY",
      description:
        "Untouched by processing, delivering the purest form of natural sweetness.",
      image:
        "https://qx-honee.myshopify.com/cdn/shop/files/slider-3.jpg?v=1725962897&width=1920",
      hoverImage:
        "https://cdn.pixabay.com/photo/2018/05/27/22/13/honey-3434774_640.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(()=>{
    fetch('http://localhost:3000/api/products',{
      method:'GET',
      headers:{'contant-type': 'application/json'}
    })
    .then(res=>{
      console.log(res);
      return res.json()
    })
    .then(result=>{
      setProducts(result.products)
    })
  },[])
  return (
    <>
      <section
        className={`flex items-center justify-center py-15 px-5 min-h-screen z-10 animate-fade-in`}
        style={{
          backgroundImage: `url(${slides[slideindex].image})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <div className="">
          <h2 className="mb-4 text-black">{slides[slideindex].heading}</h2>
          <p className="text-lg mb-7 text-gray-600">
            {slides[slideindex].description}
          </p>
          <div>
            <button className="bg-[#d4a574] text-white px-8 py-3 border-none text-sm font-bold cursor-pointer rounded hover:bg-[#b8925f] transition-colors duration-300 animate-pulse">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-1/2"></div>
      </section>

      <section className="py-15 px-5 bg-white text-center animate-fade-in-up">
        <h2 className="font-serif text-4xl mb-10 text-black">Honey Products</h2>
        {/* <p className="text-lg mb-8 text-gray-600">
          Explore our range of pure, natural honey varieties, each with unique
          flavors and health benefits.
        </p> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-7xl mx-auto">
          {
            products.length !=0 && products.map(item=>(
              <SingleProduct key={item._id}
              productid={item._id}
                instock = {item.inStock}
                title={item.title}
                price={item.price} 
                rating ={item.Rating}
                desc={item.desc}
                images ={item.productImages}
              />
              
            ))
          }
          
        </div>
      </section>

      <section className="py-15 px-5 bg-[#f9f8f6] text-center animate-fade-in">
        <h2 className="font-serif text-6xl mb-8 text-black">
          Our Testimonials
        </h2>
        <blockquote className=" text-base italic text-gray-600 my-20 mx-auto max-w-[700px]  border-2-5 border-[#d4a574] ">
          “It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.”
          <footer className="text-2xl mt-3 text-black font-bold">
            — Ashley Rosa, Managing Director
          </footer>
        </blockquote>
      </section>

      <section className="py-15 px-5 bg-white text-center animate-fade-in-up">
        <h2 className="font-serif text-4xl mb-10 text-black">Latest News</h2>
        <div className="overflow-hidden relative max-w-7xl mx-auto">
          <div
            className="flex gap-8 transition-transform duration-1000 ease-in-out"
            // style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
          >
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1 min-w-[550px] flex h-72 shrink-0">
              <img
                src="https://static.vecteezy.com/system/resources/previews/030/639/575/large_2x/honey-image-hd-free-photo.jpg"
                alt="Beehive"
                className="w-64 h-full object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-xl text-black mb-3">
                  Need best pure honey?
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  you are on the right path that serves pure organic honey
                </p>
                <a
                  href="#"
                  className="text-[#d4a574] no-underline font-bold transition-colors duration-300 hover:text-[#b8925f]"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1 min-w-[550px] flex h-72 shrink-0">
              <img
                src="https://th.bing.com/th/id/OIP.7WomGpGrVbvEKjZ5rYtrdwHaE6?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Honey jars"
                className="w-64 h-full object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-xl text-black mb-3">
                  Even though they're ?
                </h3>
                <p className="text-base text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  doli...
                </p>
                <a
                  href="#"
                  className="text-[#d4a574] no-underline font-bold transition-colors duration-300 hover:text-[#b8925f]"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1 min-w-[550px] flex h-72 shrink-0">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/27/22/13/honey-3434774_640.jpg"
                alt="Honey on toast"
                className="w-64 h-full object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-xl text-black mb-3">How much do you ?</h3>
                <p className="text-base text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  doli...
                </p>
                <a
                  href="#"
                  className="text-[#d4a574] no-underline font-bold transition-colors duration-300 hover:text-[#b8925f]"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
