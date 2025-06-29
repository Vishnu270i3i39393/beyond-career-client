import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus("success");
      alert(data.message || "Submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="min-h-screen py-10 px-2 sm:py-20 sm:px-6 bg-white flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-50 p-4 sm:p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-md transition hover:bg-indigo-700 ${
              status === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;