"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          I&apos;m Pradeep Kandala, a Senior Java Developer with 17 years of experience 
          crafting APIs, automation frameworks, and scalable systems.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          My guiding philosophy comes from Lord Krishna: 
          <span className="italic">“Perform your duty with focus, without attachment to the outcome.”</span>  
          That belief shapes not only how I code, but how I lead teams and build technology that lasts.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          Beyond engineering, I’m building <strong>Project ISM</strong> — a vision to connect people 
          to their roots through heritage, ancestry, and dharma-inspired technology.
        </p>
      </section>
    </div>
  );
}
