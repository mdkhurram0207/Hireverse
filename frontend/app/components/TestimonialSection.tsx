"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Kris Jellison",
    role: "DevOps Engineer",
    text: "Hireverse helped me land my dream role. Smooth and professional process.",
  },
  {
    name: "Sarah Ali",
    role: "Healthcare Professional",
    text: "Their global placement is top-notch. I highly recommend them!",
  },
  {
    name: "William Henley",
    role: "CDL Driver",
    text: "Very supportive team and quick placement in the US. Thanks, Hireverse!",
  },
  {
    name: "Emily Chen",
    role: "UI/UX Designer",
    text: "Amazing communication and support from the team. Truly professional.",
  },
  {
    name: "Carlos Rivera",
    role: "Warehouse Associate",
    text: "They matched me with the right role quickly. Grateful for the opportunity.",
  },
  {
    name: "Eric Ross",
    role: "CDL Driver",
    text: "Fast onboarding and supportive throughout my placement journey!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-slate-950 to-black text-gray-100 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
          What Our Clients &amp; Candidates Say
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-slate-900/80 border border-white/10 rounded-xl p-5 text-sm shadow-lg shadow-black/40"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <div className="mb-3">
                <div className="font-medium text-gray-50">{t.name}</div>
                <div className="text-xs text-slate-300">{t.role}</div>
              </div>
              <p className="text-slate-200 leading-relaxed italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
