import React from "react";
import { motion } from "framer-motion";
import careersVideo from '../Components/Assets/careers.mp4';
import { Link } from 'react-router-dom';

const Button = ({ children, as, to, ...props }) => {
  const commonClassName = "bg-black text-white px-12 py-4 text-lg rounded-xl shadow transition duration-300 w-64 border border-white hover:bg-white hover:text-black";

  if (as === "link") {
    return (
      <Link to={to} className={commonClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={commonClassName} {...props}>
      {children}
    </button>
  );
};

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CareersPage = () => {
  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={careersVideo}
        >
          <source src={careersVideo} type="video/mp4" />
        </video>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>

        <div className="relative z-20 text-center px-4 md:px-12 text-white font-bold tracking-widest">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-6"
          >
            Drive Your Future with Forbes Logistix
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-10">
              <Link to="/apply">
                <Button
                  className="px-12 py-6 text-2xl md:text-3xl bg-black rounded-xl hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto mt-20 mb-12 px-6 md:px-12 space-y-16 text-base md:text-lg leading-relaxed text-black relative">
        {/*
        <div className="bg-white p-10 md:p-14 border-l-8 border-black shadow-lg rounded-lg text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            At Forbes Logistix, we know that a great career is built on
            <span className="font-semibold"> stability</span>, 
            <span className="font-semibold"> respect</span>, and 
            <span className="font-semibold"> opportunity</span>—and that's exactly what we
            deliver. As a driver with us, you're more than just a number;
            you're part of a team that values your hard work and rewards it
            with competitive pay, industry-leading home time, and the latest
            equipment to keep you moving safely and comfortably.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're new to the industry or a seasoned pro, Forbes
            Logistix is built to help you succeed. We also believe in investing
            in the next generation—especially those looking for a strong career
            path with real growth potential.
          </motion.p>
        </div>
         */}

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-10 text-black mt-10">
          {[
            {
              title: "Maximize Your Earnings",
              desc: "Commission-based pay—no caps, no limits. The harder you run, the more you earn."
            },
            {
              title: "Home Time You Can Count On",
              desc: "Flexible scheduling and predictable routes mean more time with your family."
            },
            {
              title: "Drive the Best",
              desc: "Our fleet is packed with top-of-the-line, tech-equipped trucks for comfort and safety."
            },
            {
              title: "Real Growth Potential",
              desc: "Training and career advancement opportunities to help you get ahead."
            }
          ].map(({title, desc}, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col border border-black hover:shadow-lg transition-shadow duration-300"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-lg tracking-wide mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
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
          >
            Apply to be a Driver
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;