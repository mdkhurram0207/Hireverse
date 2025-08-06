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
      title: "Back Office Support",
      desc: "Experts in dispatch, billing, document control, and virtual assistance. Scalable support to streamline your back-end operations.",
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
    <section className="py-16 px-6 bg-gradient-to-b from-black via-[#2d2d2d] to-[#1f1f1f]
text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">What We Offer</h2>
        <p className="text-gray-400 mt-3 text-lg">Professionals across logistics, healthcare, IT, and operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            className="bg-[#1a1a1a] hover:bg-[#262626] rounded-2xl p-6 shadow-md hover:shadow-xl border border-transparent hover:border-blue-400 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">{ind.title}</h3>
            <p className="text-gray-300 text-sm">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(IndustryCards), { ssr: false });
