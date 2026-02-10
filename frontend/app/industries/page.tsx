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
    title: "Warehouse Staffing",
    description:
      "We provide trained and dependable warehouse professionals for fulfillment centers, distribution hubs, and 3PL operations across the USA, Canada, and Australia. Our workforce supports picking, packing, inventory control, material handling, and shipping while following OSHA, WH&S, and local safety standards. From seasonal peaks to long-term needs, we deliver flexible, pre-screened staff who are ready to meet productivity and compliance requirements from day one.",
    image: "/back.jpg",
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
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black px-4 md:px-12 py-16 text-gray-100 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-clip-text text-transparent"
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

            <div className="md:w-1/2 bg-slate-900/80 text-gray-100 p-8 rounded-xl shadow-xl space-y-5 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
                {industry.title}
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed">
                {industry.description}
              </p>
              <motion.a
                href="/hire-talent"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 px-7 py-2.5 text-sm font-medium text-gray-900 shadow-md shadow-black/40 hover:from-white hover:to-slate-200 transition-colors"
              >
                Hire Talent
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
