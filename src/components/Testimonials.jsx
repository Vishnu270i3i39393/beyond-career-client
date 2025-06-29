import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-white text-center"data-aos="fade-up">
    <h2 className="text-4xl font-bold text-indigo-700 mb-10">Success Stories</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
      {[
        { quote: "Beyond Career helped me land my dream internship!", author: "— Aditi, NIT" },
        { quote: "The mentorship was eye-opening and very helpful.", author: "— Rahul, IIT-K" },
      ].map((t, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-xl w-80 border-l-4 border-indigo-500">
          <p className="text-gray-700 italic">“{t.quote}”</p>
          <h4 className="mt-4 text-indigo-600 font-medium">{t.author}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
