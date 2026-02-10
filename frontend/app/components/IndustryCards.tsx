"use client";
import dynamic from "next/dynamic";

const IndustryCards = () => {
  const { motion } = require("framer-motion");

  const industries = [
    {
      title: "Logistics (CDL Drivers)",
      desc: "CDL-A/B licensed drivers with experience in long-haul and local delivery. FMCSA-compliant, safety-trained, and ready to roll nationwide.",
    },
    {
      title: "Warehouse Staffing",
      desc: "Skilled warehouse associates, forklift operators, inventory specialists, and shipping/receiving staff to keep your operations moving.",
    },
    {
      title: "Cybersecurity & DevOps",
      desc: "SOC2/HIPAA-compliant analysts and DevOps pros with AWS, Terraform, Jenkins & Kubernetes experience to secure and automate your stack.",
    },
    {
      title: "Healthcare",
      desc: "Credentialed RNs, CNAs, and caregivers for in-home and facility-based roles. Background-verified and compassion-first professionals.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-50 tracking-tight">
          What We Offer
        </h2>
        <p className="text-gray-300 mt-3 text-base md:text-lg">
          Professionals across logistics, healthcare, IT, and operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            className="bg-slate-900/80 rounded-xl p-6 shadow-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-50 mb-2">
              {ind.title}
            </h3>
            <p className="text-gray-300 text-sm">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(IndustryCards), { ssr: false });
