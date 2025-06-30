import React, { useEffect } from "react";
import { FaUserGraduate, FaHandsHelping, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: <FaUserGraduate className="text-indigo-600 text-3xl mb-2" />,
    title: "Student-Focused",
    desc: "Built by IIT Kharagpur students for the next generation of achievers.",
  },
  {
    icon: <FaHandsHelping className="text-yellow-500 text-3xl mb-2" />,
    title: "Mentorship",
    desc: "Real mentorship and guidance from experienced professionals.",
  },
  {
    icon: <FaUsers className="text-blue-700 text-3xl mb-2" />,
    title: "Community",
    desc: "A supportive community to help you succeed in your career.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-3 sm:px-6 py-8 text-center">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-3 sm:mb-4"
        data-aos="fade-down"
      >
        About Us
      </h1>
      <p
        className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl text-gray-600 mb-8"
        data-aos="fade-up"
      >
        Beyond Career is a platform built by students from IIT Kharagpur to help guide and mentor the next generation of achievers.
        We focus on providing real opportunities, mentorship, and a supportive community to help students succeed in their careers.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-aos="zoom-in-up">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl shadow-md p-6 w-full sm:w-64 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {f.icon}
            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;