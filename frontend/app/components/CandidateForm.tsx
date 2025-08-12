"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function CandidateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    resume: null,
  });

  const fileInputRef = useRef();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("category", formData.category);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/candidates`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Form submitted successfully!", {
          style: {
            background: "white",
            color: "#2563eb",
            fontWeight: "bold",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #2563eb",
          },
          iconTheme: { primary: "#2563eb", secondary: "#fff" },
        });

        console.log("Response:", res.data);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "",
          resume: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form", {
        style: {
          background: "white",
          color: "red",
          fontWeight: "bold",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid red",
        },
      });
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

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
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
          />
          <motion.input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
          />
          <motion.input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
          />

          <motion.select
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white"
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Driving">Driving</option>
            <option value="Healthcare">Healthcare</option>
          </motion.select>

          <motion.input
            ref={fileInputRef}
            name="resume"
            type="file"
            onChange={handleChange}
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
        </div>
      </motion.form>
    </>
  );
}
