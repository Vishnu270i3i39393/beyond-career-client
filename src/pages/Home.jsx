import React from "react";

const Home = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-400 px-2 sm:px-4">
    <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-4 sm:p-8 md:p-10 max-w-md sm:max-w-xl w-full text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-blue-900 font-serif drop-shadow">
        Welcome to <span className="text-yellow-500">Beyond Career</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-blue-800 mb-6 sm:mb-8">
        Empowering students to reach their dream careers.
      </p>
      <a
        href="/services"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow transition duration-200"
      >
        Explore Our Services
      </a>
    </div>
  </div>
);

export default Home;