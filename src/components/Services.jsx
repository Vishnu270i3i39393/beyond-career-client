import React from "react";

const services = [
  { title: "Career Guidance", desc: "Personalized advice to shape your journey." },
  { title: "Internships", desc: "Real-world projects with real impact." },
  { title: "Mentorship", desc: "Learn from industry experts." },
  { title: "Community", desc: "Grow together with peers." },
];

const Services = () => (
  <section id="services" className="py-20 bg-gray-50 text-center px-4"data-aos="fade-up">
    <h2 className="text-4xl font-bold text-indigo-700 mb-10">Our Services</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      {services.map((s, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-indigo-500">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">{s.title}</h3>
          <p className="text-gray-600">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
