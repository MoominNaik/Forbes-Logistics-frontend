import React from "react";
import { motion } from "framer-motion";
import homeVideo from "../Components/Assets/homeVideo.mp4";

// Reusable Styled Button
const Button = ({ children, className = "", noColorHover = false, ...props }) => (
  <button
    className={`
      bg-black 
      text-white 
      px-8 py-4 
      text-lg font-semibold 
      rounded-2xl 
      shadow-xl 
      border border-white/20 
      transition-all duration-300 ease-in-out
      ${noColorHover ? "hover:scale-105" : "hover:bg-white hover:text-black hover:scale-105"}
      ${className}
    `}
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero Section */}
      <div className="relative z-20 min-h-screen text-white font-sans flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Run with the buffalo
            </h1>
            <p className="text-2xl mb-6 text-white/90">
              Driver Founded. Driver Focused
            </p>
            <Button onClick={() => window.location.href = "operations"}>
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Apply Section */}
      <div className="relative z-20 bg-white py-20 flex flex-col items-center text-black font-sans px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Ready to Drive With Us?</h2>
        <p className="text-lg mb-8 max-w-xl text-center text-gray-700">
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Button
            onClick={() => window.location.href = "/apply"}
            className="bg-black text-white px-10 py-5 text-xl rounded-xl shadow-lgtransition duration-300 ease-in-out hover:scale-105 font-bold"
            noColorHover
          >
            Apply to be a Driver
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;