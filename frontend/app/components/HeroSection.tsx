"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-28 px-6 text-center overflow-hidden">
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <source src="/web2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Gradient Overlay with Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-gray-900/50 backdrop-blur-sm z-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -10],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hire Skilled Experts for Every{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
            Delivery
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
            Operation
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
            Care
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto bg-black/30 p-3 rounded-xl backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          CDL Drivers • Back Office Professionals • IT Experts • Healthcare Workers
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          {/* Blue Button */}
          <motion.a
            href="/hire-talent"
            className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg backdrop-blur-md border border-white/10"
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
              y: -3,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hire Talent
          </motion.a>

          {/* Emerald Green Button */}
          <motion.a
            href="/find-job"
            className="bg-gradient-to-r from-emerald-500 via-green-600 to-lime-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg backdrop-blur-md border border-white/10"
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 20px rgba(16,185,129,0.7)",
              y: -3,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Join as a Candidate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
