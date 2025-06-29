import React from "react";

const testimonials = [
  {
    quote: "Beyond Career helped me land my dream internship!",
    author: "— Aditi, NIT",
  },
  {
    quote: "The mentorship I received changed my entire career path.",
    author: "— Rahul, IIT-K",
  },
  {
    quote: "Incredible support and real opportunities. Highly recommend!",
    author: "— Priya, DTU",
  },
];

const Testimonials = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-2 sm:py-20 sm:px-6 text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-8 sm:mb-10">
      Success Stories
    </h1>
    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-80 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
        >
          <p className="italic text-gray-700 text-base sm:text-lg">“{t.quote}”</p>
          <h4 className="mt-4 font-semibold text-indigo-600 text-sm sm:text-base">{t.author}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;