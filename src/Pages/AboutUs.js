import React from "react";
import { motion } from "framer-motion";
import truckBg from "../Components/Assets/truckBg.jpg"; // Adjust path if needed

const AboutPage = () => {
  return (
    <div className="text-black">
      {/* Top Section - Fullscreen Heading */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center tracking-wide max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Forbes Logistix is a veteran-owned trucking company, focusing on flatbed
          truckload operations, founded by a truck driver.
        </motion.h2>

        <motion.p
          className="mt-6 text-xl italic text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          – let Zack wordsmith
        </motion.p>
      </section>

      {/* Bottom Section - Fullscreen About with Truck Background */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center shadow-xl"
        style={{
          backgroundImage: `url(${truckBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 text-white max-w-3xl px-6 md:px-12 py-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 border-b border-white/30 pb-2 text-center">
            About Forbes Logistix
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/90 mb-4">
            Forbes Logistix is a veteran-owned, asset-based carrier headquartered in Jackson, Mississippi.
            We specialize in open-deck transportation and operate in one of the most capacity-constrained
            freight markets in the country.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4">
            Founded by a former truck driver who also spent years in operations, Forbes was built focused
            on the driver experience. Our leadership team has sat behind the wheel, so we understand the
            road firsthand, not just from a desk. That perspective shapes everything we do.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-white/80">
            Our Jackson terminal sits on a 3-acre lot and includes a 25,000-square-foot warehouse and shop,
            giving us the infrastructure to support our fleet and partners with strength and scale.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;