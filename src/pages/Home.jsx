import React, { useEffect } from "react";
import { FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-400 px-2 sm:px-4">
      <div
        className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-4 sm:p-8 md:p-10 max-w-md sm:max-w-xl w-full text-center"
        data-aos="zoom-in"
      >
        <div className="flex justify-center mb-4 animate-bounce">
          <FaRocket className="text-yellow-500 text-4xl sm:text-5xl drop-shadow" />
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-blue-900 font-serif drop-shadow"
          data-aos="fade-down"
        >
          Welcome to <span className="text-yellow-500">Beyond Career</span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-blue-800 mb-6 sm:mb-8"
          data-aos="fade-up"
        >
          Empowering students to reach their dream careers.
        </p>
        <a
          href="/services"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow transition duration-200"
          data-aos="zoom-in-up"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default Home;