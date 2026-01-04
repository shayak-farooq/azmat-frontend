import { useState, useEffect } from "react";
import About_product from "../components/Cards/About_product";
import SingleProduct from "../components/Cards/SingleProduct.jsx";
function Home() {
  const [slideindex, setSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: { "contant-type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        const shuffled = [...result.products].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 4));
      });
  }, []);
  return (
    <>
      <section
        className="h-screen md-h-screen w-full overflow-hidden animate-fade-in"
        style={{
          backgroundImage: `url(${slides[slideindex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className=" flex flex-col justify-center h-full w-full inset-0 bg-black/30">
          {/* Content */}
          <div className=" flex justify-center items-center w-1/2">
            <div className="flex justify-center">
              {/* Text Section */}
              <div className="flex flex-col gap-3 items-center h-full lg:text-left">
                <h2 className="mb-4 text-2xl md:text-3xl text-center lg:text-4xl font-bold text-white">
                  {slides[slideindex].heading}
                </h2>

                <p className="max-w-xl mx-auto lg:mx-0 text-center md:text-lg text-gray-200">
                  {slides[slideindex].description}
                </p>

                <button className="bg-amber-500  px-8 py-3 text-sm font-semibold text-white rounded-2xl hover:bg-amber-600">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 px-5 bg-white text-center animate-fade-in-up">
        <h2 className="font-serif text-4xl mb-10 text-black">Honey Products</h2>
        {/* <p className="text-lg mb-8 text-gray-600">
          Explore our range of pure, natural honey varieties, each with unique
          flavors and health benefits.
        </p> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-7xl mx-auto">
          {products.length != 0 &&
            products.map((item) => (
              <SingleProduct
                key={item._id}
                productid={item._id}
                instock={item.inStock}
                title={item.title}
                price={item.price}
                rating={item.Rating}
                desc={item.desc}
                images={item.productImages}
              />
            ))}
        </div>
      </section>

      <section className="flex flex-col justify-evenly items-center p-5 h-screen bg-brand">
        <h2 className="font-serif text-3xl md:text-6xl text-black">
          Our Testimonials
        </h2>
        <blockquote className="flex flex-col justify-evenly text-center h-1/2 italic text-gray-600 ">
          “It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.”
          <footer className="text-l md-text-2xl text-black font-bold">
            — Ashley Rosa, Managing Director
          </footer>
        </blockquote>
      </section>

      <section className=" h-screen flex flex-col justify-evenly text-center p-2 animate-fade-in-up">
        <h2 className="font-serif text-4xl text-black underline">
          Latest News
        </h2>
        <div className="overflow-hidden h-2/3 p-2 relative w-full max-w-7xl mx-auto">
          <div
            className="flex gap-8 p-2 h-full transition-transform duration-1000 ease-in-out"
            // style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
          >
            <div className="bg-white flex justify-between items-center w-1/2 p-2 border border-gray-300 rounded-lg overflow-hidden text-left transition-transform duration-300 min-w-[550px] shrink-0">
              <img
                src="https://static.vecteezy.com/system/resources/previews/030/639/575/large_2x/honey-image-hd-free-photo.jpg"
                alt="Beehive"
                className="w-64 h-full object-cover"
              />
              <div className="pl-6 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="text-xl text-black">Need best pure honey?</h3>
                <p className="text-base text-gray-600">
                  you are on the right path that serves pure organic honey.
                </p>
                <a
                  href="#"
                  className="text-[#d4a574] no-underline font-bold transition-colors duration-300 hover:text-[#b8925f]"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="bg-white flex items-center w-1/2 p-2 border border-gray-300 rounded-lg overflow-hidden text-left transition-transform duration-300 min-w-[550px] shrink-0">
              <img
                src="https://th.bing.com/th/id/OIP.7WomGpGrVbvEKjZ5rYtrdwHaE6?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Honey jars"
                className="w-64 h-full object-cover"
              />
              <div className="pl-6 flex-1 flex flex-col justify-between space-y-2">
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
            <div className="bg-white flex items-center  w-1/2 p-2 border border-gray-300 rounded-lg overflow-hidden text-left transition-transform duration-300 min-w-[550px] shrink-0">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/27/22/13/honey-3434774_640.jpg"
                alt="Honey on toast"
                className="w-64 h-full object-cover"
              />
              <div className="pl-6 flex-1 flex flex-col justify-between space-y-2">
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
