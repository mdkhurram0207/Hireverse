import React from "react";

export default function HireForm() {
  return (
    <form className="bg-black text-white rounded-xl shadow-lg p-8 w-full border border-gray-800">
      <h3 className="text-2xl font-bold mb-6">Request Talent</h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          placeholder="Role(s) Needed"
          className="bg-black border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
