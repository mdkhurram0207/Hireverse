"use client";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { Linkedin, Globe, Send } from "lucide-react";

export default function ContactPage() {
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
    <main className="min-h-screen bg-gradient-to-br from-[#1f1f1f] via-[#3a3a3a] to-[#bcbcbc] text-white px-6 py-16">
      <motion.h1
        className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Talk
      </motion.h1>

      <p className="text-center text-gray-400 text-lg mb-14">
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
                className="flex items-center p-4 bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition hover:bg-zinc-700"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 ${method.bgColor} rounded-full flex items-center justify-center`}
                >
                  {method.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">{method.title}</h3>
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
          className="bg-zinc-900 shadow-xl rounded-xl p-8 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for reaching out!");
          }}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Send Us a Message</h2>

          <div className="space-y-4">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full bg-black border border-gray-700 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full bg-black border border-gray-700 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows={5}
              required
              placeholder="How can we help you?"
              className="w-full bg-black border border-gray-700 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold text-lg shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </main>
  );
}
