import React, { useEffect } from "react";
import { FaLightbulb, FaBriefcase, FaHandsHelping, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-4xl mb-3" />,
    title: "Career Guidance",
    desc: "Personalized advice to help you choose and excel in your career path.",
  },
  {
    icon: <FaBriefcase className="text-indigo-500 text-4xl mb-3" />,
    title: "Internships",
    desc: "Real-world internship opportunities to boost your experience.",
  },
  {
    icon: <FaHandsHelping className="text-green-500 text-4xl mb-3" />,
    title: "Mentorship Programs",
    desc: "Connect with mentors for guidance and support at every step.",
  },
  {
    icon: <FaUsers className="text-pink-500 text-4xl mb-3" />,
    title: "Student Community",
    desc: "Join a vibrant community of learners and achievers.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-6 py-10 sm:py-20 text-center">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-8 sm:mb-10"
        data-aos="fade-down"
      >
        Our Services
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition border-t-4 border-indigo-500 flex flex-col items-center"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            {service.icon}
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;