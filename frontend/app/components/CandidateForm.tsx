"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CandidateForm() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      // If you want to send files, use FormData
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("category", formData.category);
      if (fileInputRef.current?.files?.[0]) {
        data.append("file", fileInputRef.current.files[0]);
      }

      // Replace with your API endpoint
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidates`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("Submitted successfully!");
      setFormData({ name: "", email: "", phone: "", category: "" });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      setStatus("Submission failed. Try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-black rounded-xl shadow-lg p-8 w-full border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 mb-6 text-center">
        Join as Candidate
      </h3>

      <div className="flex flex-col gap-4 text-white">
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          whileFocus={{ scale: 1.02 }}
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        />
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          whileFocus={{ scale: 1.02 }}
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        />
        <motion.input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          whileFocus={{ scale: 1.02 }}
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        />
        <motion.select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white"
        >
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Driving">Driving</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Healthcare">Healthcare</option>
        </motion.select>
        <motion.input
          type="file"
          ref={fileInputRef}
          whileHover={{ scale: 1.01 }}
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white file:text-gray-300 file:mr-4"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Submit
        </motion.button>
        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </div>
    </motion.form>
  );
}
