import React from "react";
import HomeBackground from "../Assets/HomeBackground.png";

const Footer = () => {
  return (
    <div
      className="relative bg-beige-100 text-white font-sans"
      style={{
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <footer className="bg-[#2e130a] w-full py-10 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-xl font-bold tracking-wide">Forbes Logistix</h2>
          <div className="flex justify-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About Us</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Forbes Logistix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;