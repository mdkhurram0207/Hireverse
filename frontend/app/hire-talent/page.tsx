"use client";

import type { Metadata } from "next";
import HireForm from "@/app/components/HireForm";
import { motion } from "framer-motion";
import { ShieldCheck, CloudLightning, BadgeCheck, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire Talent | Warehouse, CDL, IT & Healthcare Staffing",
  description:
    "Share your hiring needs with Hireverse Global. We provide pre-vetted warehouse staff, CDL drivers, IT and healthcare professionals with fast, compliant placement.",
};

export default function HireTalentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2a2a2a] px-4 py-8 text-gray-100">
      <motion.div
        className="max-w-5xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold leading-snug text-white">
          Looking to Hire? <span className="text-blue-500">We’ve Got You Covered.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Speed. Screening. Compliance. Let us find the right talent for your success.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.section
          className="bg-[#1a1a1a] p-8 rounded-xl shadow-md border border-gray-800"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Our Vetting Process
          </h2>
          <ul className="space-y-5 text-gray-300 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-blue-500 w-6 h-6 mt-1" />
              <span>Thorough screening and comprehensive background checks</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="text-blue-500 w-6 h-6 mt-1" />
              <span>Technical assessments & compliance interviews</span>
            </li>
            <li className="flex items-start gap-3">
              <CloudLightning className="text-blue-500 w-6 h-6 mt-1" />
              <span>Quick turnaround time with transparent communication</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="text-blue-500 w-6 h-6 mt-1" />
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
          <div className="bg-[#121212] max-w-md w-full backdrop-blur-lg border-t-4 border-black rounded-xl shadow-xl p-6 hover:shadow-blue-500/30 transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-3 text-center">
              Share Your Hiring Needs
            </h2>
            <p className="text-sm text-gray-400 mb-5 text-center">
              Fill out the form below and we’ll get in touch within 24 hours.
            </p>
            <HireForm />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
