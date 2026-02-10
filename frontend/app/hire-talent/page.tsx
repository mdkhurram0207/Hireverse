"use client";

import HireForm from "@/app/components/HireForm";
import { motion } from "framer-motion";
import { ShieldCheck, CloudLightning, BadgeCheck, Brain } from "lucide-react";

export default function HireTalentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black px-4 py-12 text-gray-100">
      <motion.div
        className="max-w-5xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold leading-snug text-slate-50">
          Looking to Hire? <span className="text-slate-300">We’ve Got You Covered.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Speed. Screening. Compliance. Let us find the right talent for your success.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.section
          className="bg-slate-900/80 p-8 rounded-xl shadow-xl border border-white/10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-slate-50 mb-6 border-b border-white/10 pb-2">
            Our Vetting Process
          </h2>
          <ul className="space-y-5 text-slate-200 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-slate-200 w-6 h-6 mt-1" />
              <span>Thorough screening and comprehensive background checks</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="text-slate-200 w-6 h-6 mt-1" />
              <span>Technical assessments & compliance interviews</span>
            </li>
            <li className="flex items-start gap-3">
              <CloudLightning className="text-slate-200 w-6 h-6 mt-1" />
              <span>Quick turnaround time with transparent communication</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="text-slate-200 w-6 h-6 mt-1" />
              <span>Only pre-verified, reliable professionals</span>
            </li>
          </ul>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-slate-950/90 max-w-md w-full backdrop-blur border border-white/10 rounded-xl shadow-2xl shadow-black/60 p-6">
            <h2 className="text-xl font-semibold text-slate-50 mb-3 text-center">
              Share Your Hiring Needs
            </h2>
            <p className="text-sm text-slate-300 mb-5 text-center">
              Fill out the form below and we’ll get in touch within 24 hours.
            </p>
            <HireForm />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
