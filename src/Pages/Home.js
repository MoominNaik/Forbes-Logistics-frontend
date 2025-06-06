import React from "react";
import { motion } from "framer-motion";
import homeVideo from "../Components/Assets/homeVideo.mp4";

// Reusable Button component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`bg-[#4A2C2A] text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:bg-[#603632] transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={homeVideo} type="video/mp4" />
      </video>

      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen text-white font-sans flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              "Run with the buffalo."
            </h1>
            <p className="text-xl mb-6 text-white/90">
              Strength. Speed. Purpose. Join our mission-driven logistics team.
            </p>
            <Button
              onClick={() => window.location.href = "operations"}
              className="bg-[#4A2C2A] hover:bg-[#3A231C]"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Apply Section */}
      <div className="relative z-20 bg-black bg-opacity-80 py-20 flex flex-col items-center text-white font-sans">
        <h2 className="text-4xl font-bold mb-4">Ready to Drive With Us?</h2>
        <p className="text-lg mb-8 text-white/80 max-w-xl text-center">
          If you're passionate about being part of something bigger — where every mile counts — we’d love to have you on our team.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Button
            onClick={() => window.location.href = "/apply"}
            className="bg-[#4A2C2A] hover:bg-[#3A231C] shadow-2xl px-10 py-5 text-xl"
          >
            Apply to be a Driver
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;