"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white text-neutral-900 py-20 px-6 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hire Skilled Experts for Every Delivery, Operation &amp; Care
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-neutral-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          CDL Drivers • Warehouse Staff • IT Experts • Healthcare Workers
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          <motion.a
            href="/hire-talent"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-7 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            whileHover={{
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hire Talent
          </motion.a>

          <motion.a
            href="/find-job"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
            whileHover={{
              scale: 1.02,
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
