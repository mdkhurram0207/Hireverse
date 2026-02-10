"use client";

import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { Linkedin, Globe, Send } from "lucide-react";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // ✅ Typed ref

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_7vh4hds", // EmailJS Service ID
        "template-cgufiyw", // EmailJS Template ID
        formRef.current, // form reference
        "IZ184kvgVqiO2TnZ" // EmailJS Public Key
      );

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("⚠ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <TfiEmail className="text-blue-400 text-lg" />,
      title: "Email",
      content: "contact@hireverseglobal.in",
      href: "mailto:contact@hireverseglobal.in",
      bgColor: "bg-blue-900/30",
      textColor: "text-blue-400",
    },
    {
      icon: <BsWhatsapp className="text-green-400 text-lg" />,
      title: "WhatsApp",
      content: "+91 99979 36756",
      href: "https://wa.me/919997936756",
      bgColor: "bg-green-900/30",
      textColor: "text-green-400",
    },
    {
      icon: <Send className="text-sky-400 text-lg" />,
      title: "Telegram",
      content: "@Hireverseglobal",
      href: "https://t.me/Hireverseglobal",
      bgColor: "bg-sky-900/30",
      textColor: "text-sky-400",
    },
    {
      icon: <Globe className="text-purple-400 text-lg" />,
      title: "Website",
      content: "hireverseglobal.in",
      href: "https://hireverseglobal.in",
      bgColor: "bg-purple-900/30",
      textColor: "text-purple-400",
    },
    {
      icon: <Linkedin className="text-blue-400 text-lg" />,
      title: "LinkedIn",
      content: "Hireverse Global",
      href: "https://www.linkedin.com/company/hireverse-global/",
      bgColor: "bg-blue-900/30",
      textColor: "text-blue-400",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-gray-100 px-6 py-16">
      <motion.h1
        className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 text-transparent bg-clip-text mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Talk
      </motion.h1>

      <p className="text-center text-slate-300 text-lg mb-14">
        Reach out to Hireverse Global — we're here to connect talent with opportunity.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Options */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 bg-slate-900/80 rounded-xl shadow-md hover:shadow-xl transition hover:bg-slate-800/90 border border-white/10"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 ${method.bgColor} rounded-full flex items-center justify-center`}
                >
                  {method.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-50">{method.title}</h3>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${method.textColor} hover:underline text-sm`}
                  >
                    {method.content}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={formRef}
          className="bg-slate-950/90 shadow-2xl shadow-black/60 rounded-xl p-8 space-y-6 border border-white/10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-slate-50 mb-4">Send Us a Message</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full bg-black border border-slate-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-slate-300 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full bg-black border border-slate-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-slate-300 outline-none"
            />
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              className="w-full bg-black border border-slate-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-slate-300 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 text-gray-900 py-3 hover:from-white hover:to-slate-200 transition font-semibold text-lg shadow-lg shadow-black/50 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </main>
  );
}
