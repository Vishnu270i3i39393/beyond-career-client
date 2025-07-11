import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center px-2 sm:px-4 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="text-center max-w-xl sm:max-w-2xl z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Unlock Your <span className="text-yellow-300">Future</span> with Beyond Career
        </h1>
        <p className="text-base sm:text-xl font-light mb-8">
          Career guidance, mentorship, and real opportunities — all in one place.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-indigo-700 px-6 py-2 sm:px-8 sm:py-3 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition"
        >
          Get Started
        </a>
      </div>
      <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-white bg-opacity-10 rounded-full -top-10 -left-10 blur-2xl animate-pulse"></div>
      <div className="absolute w-60 h-60 sm:w-96 sm:h-96 bg-white bg-opacity-10 rounded-full -bottom-20 -right-20 blur-3xl animate-ping"></div>
    </section>
  );
};

export default Hero;