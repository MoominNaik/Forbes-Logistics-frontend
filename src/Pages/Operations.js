import React, { useEffect, useState } from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";
import operationsBgImage from "../Components/Assets/operationsBg.jpg";

const sections = [
  {
    title: "Mission & Philosophy",
    icon: <FaHandshake />,
    content: [
      "Our mission is to empower drivers with safety and success, led by an expert team.",
    ],
  },
  {
    title: "Unique Market Position",
    icon: <FaChartLine />,
    content: [
      "We combine big-company resources with a personal, driver-focused approach.",
    ],
  },
  {
    title: "Fleet & Facility",
    icon: <FaTruck />,
    content: [
      "Modern trucks, open-deck trailers, and a 25,000 sq. ft. terminal in Jackson, MS.",
    ],
  },
  {
    title: "Driver Support & Training",
    icon: <FaUsers />,
    content: [
      "Comprehensive training and ongoing education for every driver.",
    ],
  },
  {
    title: "Dispatch & Logistics",
    icon: <FaCogs />,
    content: [
      "Efficient dispatch, advanced logistics software, and reliable communication.",
    ],
  },
  {
    title: "Facility & Maintenance",
    icon: <FaMapMarkerAlt />,
    content: [
      "Routine maintenance and inspections keep our fleet in top condition.",
    ],
  },
];

const OperationsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAnimationStyle = (index) => {
    const phase = (scrollY / 100 + index) % 2;
    const scale = 1 + 0.2 * Math.sin(phase * Math.PI);
    return {
      transform: `scale(${scale})`,
      transition: "transform 0.4s ease-in-out",
    };
  };

  return (
    <div
      className="min-h-screen px-6 md:px-20 py-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${operationsBgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-center gap-6 ${
                idx % 2 === 1 ? "flex-row-reverse" : "flex-row"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Animated Icon */}
              <div
                className="w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-lg border border-gray-300"
                style={getAnimationStyle(idx)}
              >
                {React.cloneElement(section.icon, {
                  className: "text-white text-4xl",
                })}
              </div>

              {/* Animated Content Box */}
              <motion.div
                className="flex-1 bg-white/10 border border-white/20 text-white rounded-xl p-6 md:p-8 backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {section.title}
                </h3>
                <div className="text-white/80 text-sm leading-relaxed">
                  {section.content.map((para, i) => (
                    <p key={i} className="mb-2">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;