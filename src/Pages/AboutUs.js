import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lukeImage from "../Components/Assets/lukeImage.jpg";

const BioCard = ({ name, image, shortBio, longBio }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 transition duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl border border-white/20 shadow-md"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 tracking-wide">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed font-medium">
            {shortBio}
          </p>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3"
              >
                <p className="text-white/80 text-sm leading-relaxed">{longBio}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold tracking-wide shadow hover:scale-105 transition-transform duration-300"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-black">
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold mb-8 text-center tracking-wide max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Forbes Logistix is a veteran-owned trucking company, focusing on flatbed
        truckload operations, founded by a truck driver.
      </motion.h2>

      <section className="mb-10 max-w-3xl mx-auto text-xl text-center text-gray-700 italic">
        <p>– let Zack wordsmith</p>
      </section>

      <section className="max-w-4xl mx-auto space-y-10">
        <BioCard
          name="Chase"
          image={lukeImage}
          shortBio="Chase has years of hands-on experience and leads with a blue-collar, boots-on-the-ground mindset."
          longBio="Chase has been at the forefront of the flatbed trucking industry, building a reputation for excellence through real-world experience and dedication to drivers. He believes in leadership through action and consistency. Chase plays a crucial role in shaping Forbes Logistix’s operational strategy and culture."
        />
      </section>
    </div>
  );
};

export default AboutPage;