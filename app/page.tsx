"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-32">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4">
          Pradeep Kandala
        </motion.h1>
        <p className="text-xl text-gray-600 mb-6">
          Senior Java Developer | Building scalable systems guided by dharma
        </p>
        <div className="space-x-4">
          <a href="/projects">
            <Button>View Projects</Button>
          </a>
          <a href="/contact">
            <Button variant="outline">Contact Me</Button>
          </a>


        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          With 17 years of experience in software engineering, I specialize in Spring Boot API development and Python automation.
          My philosophy is rooted in Krishna's teachings: to work with devotion, without attachment to the results.
          I strive to create systems that are elegant, efficient, and ethically designed.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Family Tree App</h3>
                <p className="text-gray-600 mb-4">A visual ancestry platform built with Spring Boot & React, showing relational data in real-time graphs.</p>
                <Button variant="link">View Project →</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project ISM</h3>
                <p className="text-gray-600 mb-4">An Indian social media vision rooted in identity, dharma, and connection. Currently under active development.</p>
                <Button variant="link">View Project →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600">
        <p>Work without attachment — Code without fear.</p>
        <p className="text-sm">© {new Date().getFullYear()} Pradeep Kandala</p>
      </footer>
    </div>
  );
}
