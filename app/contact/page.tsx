"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      <section className="max-w-xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-8 text-gray-600">
          Whether it’s collaboration, mentorship, or just a great tech discussion — I’d love to connect.
        </p>
        <form
          action="https://formspree.io/f/mnqwpjye" // Replace with your real Formspree endpoint later
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-gray-700">
          <p>📧 <a href="mailto:kpradeepster@gmail.com" className="text-blue-600 underline">pradeepkandala@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/kpradeepster/" target="_blank" className="text-blue-600 underline">LinkedIn</a></p>
          <p>🐦 <a href="https://x.com/kpradeepster" target="_blank" className="text-blue-600 underline">Twitter (X)</a></p>
        </div>
      </section>
    </div>
  );
}
