import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default LandingPage;
