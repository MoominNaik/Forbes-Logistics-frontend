import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, ...props }) => (
  <button
    className="bg-gradient-to-r from-[#5C3B36] to-[#4A2C2A] hover:from-[#4A2C2A] hover:to-[#5C3B36] text-white px-12 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 border-2 border-[#dbb27e] hover:border-white"
    {...props}
  >
    {children}
  </button>
);

const ContactPage = () => {
  return (
    <div className="bg-[#dbb27e] text-[#4A2C2A] min-h-screen px-4 md:px-12 py-16">
      <section className="max-w-5xl mx-auto text-center mt-40">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Get in Touch with Forbes Logistix
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto font-medium"
        >
          Whether you're interested in our services, want to join our team, or
          just have a question—we’d love to hear from you.
        </motion.p>
      </section>

      {/* Contact Card Grid */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#4A2C2A] to-[#5C3B36] p-8 rounded-xl shadow-lg border border-[#6D4E48] text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Head Office</h3>
          <p className="text-white/90">
            123 Logistics Avenue, Freight City, TX 75000
          </p>
          <p className="text-white/90">Email: contact@forbeslogistix.com</p>
          <p className="text-white/90">Phone: (123) 456-7890</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#4A2C2A] to-[#5C3B36] p-8 rounded-xl shadow-lg border border-[#6D4E48] text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Operating Hours</h3>
          <p className="text-white/90">
            Monday – Friday: 8:00 AM – 6:00 PM <br />
            Saturday: 9:00 AM – 2:00 PM <br />
            Sunday: Closed
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto mt-40 bg-gradient-to-br from-[#fff4e6] via-[#fce1c8] to-[#f7d6ad] p-10 rounded-xl shadow-xl border border-[#cfa36e]">
      <h2 className="text-2xl font-bold text-center mb-6">          Send Us a Message
        </h2>
        <form className="space-y-6 text-left">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-[#4A2C2A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4A2C2A]"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-[#4A2C2A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4A2C2A]"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Your Message</label>
            <textarea
              rows="5"
              className="w-full border border-[#4A2C2A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4A2C2A]"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <Button type="submit">Submit Message</Button>
          </div>
        </form>
      </section>

      {/* Final Encouragement */}
      <div className="text-center mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold"
        >
          Let’s build something great together.
        </motion.h3>
      </div>
    </div>
  );
};

export default ContactPage;