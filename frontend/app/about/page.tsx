 "use client";
import type { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Hireverse Global | Warehouse & Specialist Staffing Partner",
  description:
    "Learn about Hireverse Global, a staffing partner focused on warehouse staffing, CDL drivers, IT, and healthcare professionals with a compliance-first, people-centered approach.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#2a2a2a] text-white font-sans">

      {/* Hero Section */}
      <motion.section
        className="text-center mb-24"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
          Empowering Workforces. Connecting Futures.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mt-4">
          Hireverse Global is your strategic staffing partner — connecting top-tier talent with leading companies across technology, transportation, healthcare, and warehouse staffing.
        </p>
        <div className="w-24 h-1 mt-6 bg-blue-500 mx-auto rounded-full" />
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="mb-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
            Our Mission
          </h2>
          <p className="text-gray-300">
            To bridge the talent gap by delivering tailored staffing solutions that meet client goals with precision, speed, and compliance.
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
            Our Vision
          </h2>
          <p className="text-gray-300">
            To become the most reliable staffing partner in the U.S., known for industry specialization, people-first service, and operational excellence.
          </p>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section
        className="mb-20 max-w-5xl mx-auto bg-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="text-white font-medium mb-1">Technology</h3>
            <p>DevOps Engineers, Cloud Architects, Cybersecurity Analysts, IT Support Specialists</p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Transportation</h3>
            <p>CDL Drivers, Fleet Coordinators, Logistics Managers, Dispatch Operators</p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Healthcare</h3>
            <p>Registered Nurses (RNs), Certified Nursing Assistants (CNAs), Caregivers, Medical Assistants</p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Warehouse Staffing</h3>
            <p>Warehouse Associates, Forklift Operators, Inventory Clerks, Shipping & Receiving Staff</p>
          </div>
        </div>
      </motion.section>

      {/* How We Deliver */}
      <motion.section
        className="mb-20 max-w-5xl mx-auto bg-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
          How We Deliver Results
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>In-depth consultation to understand your unique business needs</li>
          <li>Access to verified talent pools and niche candidate networks</li>
          <li>Multi-step screening: interviews, credential checks, compliance audits</li>
          <li>Dedicated onboarding support for fast, frictionless placement</li>
          <li>Post-placement follow-up to ensure sustained success</li>
        </ul>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="mb-20 max-w-5xl mx-auto bg-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
          Why Hireverse Global?
        </h2>
        <div className="space-y-4 text-gray-300">
          <p><strong className="text-white">Speed & Agility:</strong> We fill roles in as little as 48–72 hours with pre-vetted professionals.</p>
          <p><strong className="text-white">Expert Recruiters:</strong> Our team understands the industries we serve — because we’ve worked in them.</p>
          <p><strong className="text-white">Compliance First:</strong> We adhere to the highest standards in hiring and onboarding regulations.</p>
          <p><strong className="text-white">Human-Centered Approach:</strong> Communication, transparency, and trust drive every engagement.</p>
          <p><strong className="text-white">Scalable Partnerships:</strong> From startups to enterprises, we grow with your business needs.</p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xl font-medium mb-4 text-gray-100">
          Ready to scale your team or find your next opportunity?
        </p>
        <a
          href="/find-job"
          className="inline-block bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Let's Get Started
        </a>
        <div className="w-20 h-1 mt-6 bg-blue-500 mx-auto rounded-full" />
      </motion.section>

      {/* Footer */}
      <motion.section
        className="text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.linkedin.com/company/hireverse-global/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-600 transition"
        >
          Follow Hireverse Global on LinkedIn →
        </a>
      </motion.section>
    </main>
  );
}
