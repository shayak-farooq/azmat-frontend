import { useState, useEffect } from "react";

const honeySlides = [
  {
    title: "Wildflower honey",
    desc:
      "Has a mild flavor and a slightly medicinal scent, and its menthol-like properties help soothe colds, coughs, and upper-respiratory infections.",
    image:
      "https://static.vecteezy.com/system/resources/previews/030/639/575/large_2x/honey-image-hd-free-photo.jpg",
  },
  {
    title: "Buckwheat honey",
    desc:
      "Has a bold flavor and dark color, rich in antioxidants and beneficial for immunity.",
    image:
      "https://cdn.pixabay.com/photo/2018/05/27/22/13/honey-3434774_640.jpg",
  },
  {
    title: "Clover honey",
    desc:
      "Light, sweet, and smooth honey perfect for daily use and desserts.",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
  },
  {
    title: "Forest honey",
    desc:
      "Collected from forest blossoms, rich in minerals and deep aroma.",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
];

export default function HoneySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % honeySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden max-w-7xl mx-auto">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {honeySlides.map((item, i) => (
          <div
            key={i}
            className="min-w-full flex justify-center gap-10 px-10"
          >
            <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 p-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-64 h-64 object-cover rounded-lg"
              />
              <div className="md:ml-8 space-y-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {honeySlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
