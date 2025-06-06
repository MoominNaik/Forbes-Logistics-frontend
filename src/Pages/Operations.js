import React, { useEffect, useState } from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import operationsBgImage from '../Components/Assets/operations.jpg';

const sections = [
  {
    title: "Mission & Philosophy",
    icon: <FaHandshake />,
    content: [
      "Our mission is to empower drivers with safety and success, led by an expert team."
    ],
  },
  {
    title: "Unique Market Position",
    icon: <FaChartLine />,
    content: [
      "We combine big-company resources with a personal, driver-focused approach."
    ],
  },
  {
    title: "Fleet & Facility",
    icon: <FaTruck />,
    content: [
      "Modern trucks, open-deck trailers, and a 25,000 sq. ft. terminal in Jackson, MS."
    ],
  },
  {
    title: "Driver Support & Training",
    icon: <FaUsers />,
    content: [
      "Comprehensive training and ongoing education for every driver."
    ],
  },
  {
    title: "Dispatch & Logistics",
    icon: <FaCogs />,
    content: [
      "Efficient dispatch, advanced logistics software, and reliable communication."
    ],
  },
  {
    title: "Facility & Maintenance",
    icon: <FaMapMarkerAlt />,
    content: [
      "Routine maintenance and inspections keep our fleet in top condition."
    ],
  },
];

const OperationsPage = () => {
  // Scroll animation state for pulse effect
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute animation style based on scroll position
  const getAnimationStyle = (index) => {
    // Make animation phase offset by index so icons pulse at different times
    const phase = (scrollY / 100 + index) % 2; // oscillates between 0 and 2
    const scale = 1 + 0.2 * Math.sin(phase * Math.PI); // pulse scale 1 to 1.2
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
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#2e130a] bg-opacity-45 z-0"></div>

      {/* Original content container, ensure it's above the overlay */}
      <div className="border-l-4 border-r-4 border-[#6D4E48] px-10 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-stretch mt-8">
        {sections.map((section, idx) => (
          <div key={idx} className={`relative flex items-center gap-6 h-full ${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Bigger icon with scroll animation, vertically centered */}
            <div
              className="w-20 h-20 rounded-full bg-[#5C3B36] flex items-center justify-center shadow-lg border border-[#6D4E48]"
              style={getAnimationStyle(idx)}
            >
              {React.cloneElement(section.icon, {
                className: "text-white text-5xl",
              })}
            </div>

            {/* Section card */}
            <div className={`flex-1 bg-gradient-to-r from-[#5C3B36] via-[#7f574b] to-[#5C3B36] rounded-2xl shadow-xl p-8 md:p-10 border border-[#6D4E48] text-white hover:shadow-2xl transition-shadow duration-300 mb-0 h-full min-h-[180px] flex flex-col justify-between ${idx % 2 === 1 ? 'border-l-4 border-[#6D4E48]' : ''}`}>
              <h3 className="text-xl font-extrabold text-white mb-4 tracking-wide">
                {section.title}
              </h3>
              <div className="text-white/90 text-sm leading-relaxed font-medium">
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationsPage;