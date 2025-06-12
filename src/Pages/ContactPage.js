import React from "react";
import { motion } from "framer-motion";


const ContactPage = () => {
  return (
    <div className="bg-white text-black min-h-screen px-4 md:px-12 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mt-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Get in Touch with Forbes Logistix
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto text-gray-700"
        >
          Whether you're interested in our services, want to join our team, or just have a question—we’d love to hear from you.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 border  rounded-2xl shadow-md p-10 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-3">Head Office</h3>
          <p className="text-gray-800 mb-1">123 Logistics Avenue</p>
          <p className="text-gray-800 mb-1">Freight City, TX 75000</p>
          <p className="text-gray-800 mb-1">Email: contact@forbeslogistix.com</p>
          <p className="text-gray-800">Phone: (123) 456-7890</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 border rounded-2xl shadow-md p-10 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-semibold mb-3">Operating Hours</h3>
          <p className="text-gray-800">
            Open 24 hours a day,<br/> 7 days a week,<br/> 365 days a year.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto mt-32 bg-gray-50 p-10 rounded-2xl shadow-md border">
        <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
        <form className="space-y-6 text-left">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black bg-white"
              placeholder="Type your message..."
            />
          </div>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-black text-white px-12 py-4 text-lg rounded-xl border border-white transition duration-300  hover:scale-105 font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;