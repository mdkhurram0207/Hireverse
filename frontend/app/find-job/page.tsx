"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import CandidateForm from "../components/CandidateForm";
import {
  Briefcase,
  Truck,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Find a Job | Warehouse, CDL, IT & Healthcare Roles",
  description:
    "Search for warehouse, CDL driving, IT, and healthcare roles with Hireverse Global. Submit your profile and get matched with verified employers.",
};

export default function FindJobPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2a2a2a] px-4 py-8 text-gray-100">
      <motion.div
        className="max-w-5xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold leading-snug text-white">
          Searching for Work?{" "}
          <span className="text-blue-500">We’ll Help You Land It.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Discover roles across top industries with verified employers.
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
            Industries We Hire For
          </h2>
          <ul className="space-y-4 text-gray-300 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <Briefcase className="text-blue-500 w-5 h-5 mt-1" />
              <span>Technology – DevOps, Cloud Engineers, IT Support</span>
            </li>
            <li className="flex items-start gap-3">
              <Truck className="text-blue-500 w-5 h-5 mt-1" />
              <span>Transport – CDL Drivers, Fleet Operators, Dispatchers</span>
            </li>
            <li className="flex items-start gap-3">
              <Stethoscope className="text-blue-500 w-5 h-5 mt-1" />
              <span>Healthcare – Nurses, Medical Assistants, Caregivers</span>
            </li>
            <li className="flex items-start gap-3">
              <ClipboardList className="text-blue-500 w-5 h-5 mt-1" />
              <span>Warehouse Staffing – Pickers, Packers, Inventory, Forklift Operators</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-6 border-b border-gray-700 pb-2">
            Why Job Seekers Trust Us
          </h2>
          <ul className="space-y-4 text-gray-300 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <Sparkles className="text-blue-500 w-5 h-5 mt-1" />
              <span>Fast hiring process, no guesswork</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="text-blue-500 w-5 h-5 mt-1" />
              <span>Verified employers & secure applications</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="text-blue-500 w-5 h-5 mt-1" />
              <span>Career-focused roles for long-term growth</span>
            </li>
          </ul>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-black max-w-md mx-auto rounded-xl shadow-xl p-8 md:p-10 hover:shadow-blue-500/30 transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Submit Your Application
            </h2>
            <p className="text-sm text-gray-400 mb-6 text-center">
              Fill out your info and our team will match you with the best roles.
            </p>
            <CandidateForm />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
