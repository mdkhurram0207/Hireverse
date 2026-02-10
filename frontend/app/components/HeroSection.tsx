"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-gray-100">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hire Skilled Experts for Every Delivery, Operation &amp; Care
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 px-8 py-3 text-sm font-medium text-gray-900 shadow-lg shadow-black/40 hover:from-white hover:to-slate-200 transition-colors"
            whileHover={{
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hire Talent
          </motion.a>

          <motion.a
            href="/find-job"
            className="inline-flex items-center justify-center rounded-full border border-slate-500/60 px-7 py-3 text-sm font-medium text-gray-100/90 bg-black/30 hover:bg-black/50 transition-colors"
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
