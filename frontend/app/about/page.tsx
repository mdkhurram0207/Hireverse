"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-black via-slate-950 to-black text-gray-100 font-sans">

      {/* Hero Section */}
      <motion.section
        className="text-center mb-24"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 text-transparent bg-clip-text">
          Empowering Workforces. Connecting Futures.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed mt-4">
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
        <div className="bg-slate-900/80 p-8 rounded-xl shadow-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 text-slate-50">
            Our Mission
          </h2>
          <p className="text-slate-200">
            To bridge the talent gap by delivering tailored staffing solutions that meet client goals with precision, speed, and compliance.
          </p>
        </div>
        <div className="bg-slate-900/80 p-8 rounded-xl shadow-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3 text-slate-50">
            Our Vision
          </h2>
          <p className="text-slate-200">
            To become the most reliable staffing partner in the U.S., known for industry specialization, people-first service, and operational excellence.
          </p>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section
        className="mb-20 max-w-5xl mx-auto bg-slate-900/80 p-8 rounded-xl shadow-xl border border-white/10"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-slate-50">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-200">
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
        className="mb-20 max-w-5xl mx-auto bg-slate-900/80 p-8 rounded-xl shadow-xl border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-slate-50">
          How We Deliver Results
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-200">
          <li>In-depth consultation to understand your unique business needs</li>
          <li>Access to verified talent pools and niche candidate networks</li>
          <li>Multi-step screening: interviews, credential checks, compliance audits</li>
          <li>Dedicated onboarding support for fast, frictionless placement</li>
          <li>Post-placement follow-up to ensure sustained success</li>
        </ul>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="mb-20 max-w-5xl mx-auto bg-slate-900/80 p-8 rounded-xl shadow-xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-slate-50">
          Why Hireverse Global?
        </h2>
        <div className="space-y-4 text-slate-200">
          <p><strong className="text-slate-50">Speed & Agility:</strong> We fill roles in as little as 48–72 hours with pre-vetted professionals.</p>
          <p><strong className="text-slate-50">Expert Recruiters:</strong> Our team understands the industries we serve — because we’ve worked in them.</p>
          <p><strong className="text-slate-50">Compliance First:</strong> We adhere to the highest standards in hiring and onboarding regulations.</p>
          <p><strong className="text-slate-50">Human-Centered Approach:</strong> Communication, transparency, and trust drive every engagement.</p>
          <p><strong className="text-slate-50">Scalable Partnerships:</strong> From startups to enterprises, we grow with your business needs.</p>
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
        <p className="text-xl font-medium mb-4 text-slate-100">
          Ready to scale your team or find your next opportunity?
        </p>
        <a
          href="/find-job"
          className="inline-block rounded-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 hover:from-white hover:to-slate-200 text-gray-900 py-3 px-8 shadow-lg shadow-black/40 transition duration-300"
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
