"use client";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Logistics & Transportation",
    description:
      "We provide reliable CDL-A and CDL-B drivers for regional, long-haul, and last-mile delivery. Our FMCSA-compliant drivers ensure safety, compliance, and timeliness across supply chains. Whether you're managing freight logistics or need specialized drivers for critical routes, we offer scalable staffing solutions tailored to your delivery demands.",
    image: "/trk1.png",
  },
  {
    title: "Back Office & Admin Support",
    description:
      "Hire expert administrative professionals, HR coordinators, executive assistants, and customer service reps. From managing day-to-day operations to supporting leadership and client communication, our talent boosts efficiency and streamlines internal workflows. We help organizations scale administrative needs without compromising on quality.",
    image: "/back.png",
  },
  {
    title: "Cybersecurity & Cloud",
    description:
      "Secure your infrastructure with certified cloud security and cybersecurity professionals. Our experts help implement and monitor compliance frameworks like SOC2 and HIPAA, conduct vulnerability assessments, manage identity and access controls, and design resilient cloud environments across AWS, Azure, and GCP.",
    image: "/itt.png",
  },
  {
    title: "Healthcare Staffing",
    description:
      "We deliver top-tier RNs, LPNs, CNAs, and medical professionals for hospitals, clinics, and long-term care facilities. All staff are fully licensed, background-checked, and prepared to provide exceptional patient care. From per diem to full-time placements, we ensure a reliable clinical workforce at every level.",
    image: "/doc.png",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2a2a2a] px-4 md:px-12 py-16 text-white font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
      >
        Industries We Serve
      </motion.h1>

      <div className="space-y-20">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
          >
            <div className="md:w-1/2 flex justify-center">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-[90%] h-[260px] md:h-[340px] object-cover object-top rounded-xl shadow-xl"
              />
            </div>

            <div className="md:w-1/2 bg-[#1c1c1c] text-white p-8 rounded-xl shadow-lg space-y-5 border border-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {industry.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {industry.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 hover:bg-white hover:text-black hover:scale-105"
              >
                Hire Talent
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
