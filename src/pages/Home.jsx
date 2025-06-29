import React from "react";

const Home = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-400 px-4">
    <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-10 max-w-xl w-full text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-900 font-serif drop-shadow">
        Welcome to <span className="text-yellow-500">Beyond Career</span>
      </h1>
      <p className="text-xl text-blue-800 mb-8">
        Empowering students to reach their dream careers.
      </p>
      <a
        href="/services"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow transition duration-200"
      >
        Explore Our Services
      </a>
    </div>
  </div>
);

export default Home;