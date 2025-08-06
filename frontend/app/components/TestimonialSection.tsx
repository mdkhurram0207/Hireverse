"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Kris Jellison",
    role: "DevOps Engineer",
    photo:
      "https://media.licdn.com/dms/image/v2/C4E03AQHjZdJC_OKnPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644181173433?e=1756944000&v=beta&t=2ONe_i6ngqd2TYITyVRIv1u1M95tem74es1j5aYKh6E",
    text: "Hireverse helped me land my dream role. Smooth and professional process.",
  },
  {
    name: "Sarah Ali",
    role: "Healthcare Professional",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Their global placement is top-notch. I highly recommend them!",
  },
  {
    name: "William henley",
    role: "CDL Driver",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQFLLNWEb78quQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670078647031?e=1756944000&v=beta&t=GyayLGEWgFsywuHlTETNR8AXH0QxgvV8eh6clcdRQjE",
    text: "Very supportive team and quick placement in the US. Thanks, Hireverse!",
  },
  {
    name: "Emily Chen",
    role: "UI/UX Designer",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "Amazing communication and support from the team. Truly professional.",
  },
  {
    name: "Carlos Rivera",
    role: "Back Office Executive",
    photo:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    text: "They matched me with the right role quickly. Grateful for the opportunity.",
  },
  {
    name: "Eric Ross",
    role: "CDL Driver",
    photo:
      "https://media.licdn.com/dms/image/v2/C4E03AQGFi4LzZL_ZtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1603830111342?e=1756944000&v=beta&t=NaDKLgfBis_XG8F8EmqGR3WorMHSd3ByplRFi13w9kw",
    text: "Fast onboarding and supportive throughout my placement journey!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-gradient-to-b from-[#1f1f1f] via-[#181818] to-[#141414] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          What Our Clients & Candidates Say
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-[#242424] border border-[#2f2f2f] rounded-xl p-5 text-sm hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-orange-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-blue-500"
                />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
