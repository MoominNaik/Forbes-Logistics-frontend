import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chaseImage from '../Components/Assets/chaseImage.jpg';
import lukeImage from '../Components/Assets/lukeImage.jpg';



const BioCard = ({ name, image, shortBio, longBio }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 border border-[#6D4E48] hover:shadow-2xl transition-shadow duration-300">
  <img
    src={image}
    alt={name}
    className="w-32 h-32 object-cover rounded-2xl border-2 border-[#8A6C66] shadow-sm"
  />
  <div className="flex-1">
    <h3 className="text-xl font-extrabold text-white mb-2 tracking-wide">
      {name}
    </h3>
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
          className="overflow-hidden mt-4"
        >
          <p className="text-white/80 text-sm leading-relaxed">{longBio}</p>
        </motion.div>
      )}
    </AnimatePresence>

    <div className="mt-4">
      <button
        onClick={() => setShowMore(!showMore)}
        className="bg-[#dbb27e] hover:bg-[#c9a06d] text-[#4A2C2A] px-4 py-1.5 rounded-lg text-sm font-semibold tracking-wide shadow transition duration-300"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  </div>
</div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#dbb27e] px-6 md:px-20 py-16 text-[#4A2C2A]">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-center tracking-wide">
        Forbes Logistix is a veteran-owned trucking company, focusing on
        flatbed truckload operations, founded by a truck driver.
      </h2>
      <section className="mb-5 max-w-3xl mx-auto text-2xl leading-relaxed text-center">
        <p className="text-[#4A2C2A]">
          <span className="italic text-[#4A2C2A]">– let Zack wordsmith</span>
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        

        <div className="space-y-10">
          <BioCard
            name="Chase"
            image={chaseImage}
            shortBio="Chase has years of hands-on experience and leads with a blue-collar, boots-on-the-ground mindset."
            longBio="Chase has been at the forefront of the flatbed trucking industry, building a reputation for excellence through real-world experience and dedication to drivers. He believes in leadership through action and consistency. Chase plays a crucial role in shaping Forbes Logistix’s operational strategy and culture."
          />

          <BioCard
            name="Luke"
            image={lukeImage}
            shortBio="Luke brings a strong background in trucking and logistics with years of field expertise."
            longBio="Luke has worked across multiple levels of trucking operations, from dispatch to field logistics. His background includes years of experience managing fleet strategy, ensuring compliance, and improving trucking efficiency from the ground up. His leadership brings a practical, results-driven approach to Forbes Logistix."
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;