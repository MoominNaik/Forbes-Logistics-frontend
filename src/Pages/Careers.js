import React from "react";
import { motion } from "framer-motion";
import careersVideo from '../Components/Assets/careers.mp4';
import { Link } from 'react-router-dom';

const Button = ({ children, as, href, ...props }) => {
  const commonClassName = "bg-gradient-to-r from-[#5C3B36] to-[#4A2C2A] hover:from-[#4A2C2A] hover:to-[#5C3B36] text-white px-12 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 border-2 border-[#dbb27e] hover:border-white";

  if (as === "a") {
    return (
      <Link to={href} className={commonClassName} {...props}>
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

const CareersPage = () => {
  return (
    <div className="bg-[#dbb27e] text-[#4A2C2A] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          src={careersVideo}
        >
          <source src={careersVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        
        <div className="relative z-10 text-center px-4 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide text-[white] drop-shadow-xl mb-6"
          >
            Drive Your Future with Forbes Logistix
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-16">
              <Button as="a" href="/apply">
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto mt-20 mb-52 px-6 md:px-12 space-y-12">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#4A2C2A] opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#4A2C2A] opacity-20"></div>
          <div className="text-lg md:text-xl leading-relaxed text-center w-full bg-gradient-to-r from-[#f5e6d6]/60 to-[#e7c9a9]/60 p-8 border-l-8 border-[#cfa36e] shadow-2xl backdrop-blur-md border border-[#4A2C2A]/10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-medium"
            >
              At Forbes Logistix, we know that a great career is built on
              <span className="text-[#4A2C2A] font-bold"> stability</span>, 
              <span className="text-[#4A2C2A] font-bold"> respect</span>, and 
              <span className="text-[#4A2C2A] font-bold"> opportunity</span>—and that's exactly what we
              deliver. As a driver with us, you're more than just a number;
              you're part of a team that values your hard work and rewards it
              with competitive pay, industry-leading home time, and the latest
              equipment to keep you moving safely and comfortably.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-medium"
            >
              Whether you're new to the industry or a seasoned pro, Forbes
              Logistix is built to help you succeed. We also believe in investing
              in the next generation—especially those looking for a strong career
              path with real growth potential.
            </motion.p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-10 text-[#4A2C2A] mt">
          <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-xl shadow-lg p-5 flex flex-col border border-[#6D4E48] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-2">
              Maximize Your Earnings
            </h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              Commission-based pay—no caps, no limits. The harder you run, the
              more you earn.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-xl shadow-lg p-5 flex flex-col border border-[#6D4E48] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-2">
              Home Time You Can Count On
            </h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              Flexible scheduling and predictable routes mean more time with
              your family.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-xl shadow-lg p-5 flex flex-col border border-[#6D4E48] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-2">Drive the Best</h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              Our fleet is packed with top-of-the-line, tech-equipped trucks
              for comfort and safety.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-xl shadow-lg p-5 flex flex-col border border-[#6D4E48] hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-2">Safety First, Always</h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              24/7 support, ongoing training, and the latest safety features on
              every route.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-xl shadow-lg p-5 flex flex-col border border-[#6D4E48] hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-2">
              A Future Beyond the Wheel
            </h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              From driver to dispatcher or operations—real career growth is
              built in. We promote from within.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#3A1F1E] via-[#4A2C2A] to-[#5C3B36] rounded-xl shadow-lg p-5 flex flex-col border border-[#6D4E48] hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <h3 className="text-lg font-extrabold text-white tracking-wide mb-2">A Career That Starts Anywhere</h3>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              No matter where you're from, if you've got the drive, we've got
              the roadmap. Forbes Logistix welcomes all.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center ">
          <h3 className="text-2xl font-bold mb-4">
            Your road starts here. Join the Forbes Logistix family.
          </h3>
          <div className="mt-16">
            <Button as="a" href="/apply">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;