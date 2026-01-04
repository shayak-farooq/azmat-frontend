import { useState } from "react";

const testimonials = [
  {
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Ashley rosa",
    role: "Managing director",
    rating: 4,
  },
  {
    quote: "This honey is amazing! The taste and quality are unmatched.",
    name: "John Doe",
    role: "Bee Keeper",
    rating: 5,
  },
  {
    quote: "Excellent product and great customer service!",
    name: "Jane Smith",
    role: "Chef",
    rating: 4,
  },
];

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  function prevTestimonial() {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function nextTestimonial() {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="w-full relative">
      <div className="max-w-4xl mx-auto text-center py-16 px-6 bg-[#f9f4ec]">
        {/* Quote Icon */}
        <div className="text-orange-500 text-9xl mb-2 font-serif">&#8220;</div>

        {/* Star Rating */}
        <div className="flex justify-center mb-6 space-x-1 text-orange-500">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? "fill-current" : "fill-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
          </svg>
        ))} 
      </div>

        {/* Testimonial Text */}
        <p className="text-lg max-w-xl mx-auto mb-6 text-gray-900">
          {testimonial.quote}
        </p>

        {/* Name and Role */}
        <p className="font-semibold text-orange-500">{testimonial.name}</p>
        <p className="text-gray-400">{testimonial.role}</p>
      </div>
      {/* Navigation Arrows */}
      <div>
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="absolute md:left-10 left-0 md:top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-orange-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="absolute md:right-10 right-0 md:top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-orange-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
