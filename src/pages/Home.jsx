import { useState, useEffect } from "react";
import About_product from "../components/Cards/About_product";
import SingleProduct from "../components/Cards/SingleProduct.jsx";
import HoneySlider from "../components/Cards/HoneySlider.jsx";
import TestimonialCard from "../components/Cards/TestimonialCard.jsx";
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

      <section className="flex flex-col justify-evenly items-center p-7 bg-brand">
        <h2 className="font-serif text-3xl md:text-6xl text-black">
          Our Testimonials
        </h2>
        <TestimonialCard/>
      </section>

      <section className="py-15 px-5 bg-white text-center animate-fade-in-up">
        <h2 className="font-serif text-4xl mb-10 text-black">Experience 4 types of uniquely wild honey</h2>
        <HoneySlider/>
      </section>
    </>
  );
}

export default Home;