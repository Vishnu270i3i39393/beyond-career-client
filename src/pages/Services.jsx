import React from "react";

const Services = () => {
  const services = [
    "Career Guidance",
    "Internships",
    "Mentorship Programs",
    "Student Community",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-6 py-10 sm:py-20 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-8 sm:mb-10">
        Our Services
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition border-t-4 border-indigo-500"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2">{item}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Learn, grow, and succeed with expert help and real-world opportunities.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;