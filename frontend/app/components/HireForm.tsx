"use client";

import React, { useState } from "react";
import { API } from "../../utils/api";
import toast, { Toaster } from "react-hot-toast";

export default function HireForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.company.trim()) return "Company name is required";
    if (!formData.email.includes("@")) return "Invalid email address";
    if (!formData.role.trim()) return "Role is required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      toast.error(errorMsg, {
        style: {
          background: "#1e3a8a",
          color: "#fff",
          fontWeight: "bold",
        },
        iconTheme: {
          primary: "#3b82f6",
          secondary: "#fff",
        },
      });
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/clients", formData);

      toast.success(res.data?.message || "Request submitted successfully!", {
        style: {
          background: "#ffffff",
          color: "#1e3a8a",
          border: "2px solid #3b82f6",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "14px 20px",
          borderRadius: "10px",
        },
        iconTheme: {
          primary: "#3b82f6",
          secondary: "#fff",
        },
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        role: "",
      });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Error submitting request!", {
        style: {
          background: "#1e3a8a",
          color: "#fff",
          fontWeight: "bold",
        },
        iconTheme: {
          primary: "#3b82f6",
          secondary: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white rounded-xl shadow-lg p-8 w-full border border-gray-800"
      >
        <h3 className="text-2xl font-bold mb-6">Request Talent</h3>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role(s) Needed"
            className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
