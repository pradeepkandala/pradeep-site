"use client";

import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

export default function FamilyTreePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: [
        { data: { id: "krishna", label: "Krishna" } },
        { data: { id: "arjuna", label: "Arjuna" } },
        { data: { id: "bhima", label: "Bhima" } },
        { data: { source: "krishna", target: "arjuna", label: "Guide" } },
        { data: { source: "krishna", target: "bhima", label: "Brother-in-spirit" } },
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#2563eb",
            label: "data(label)",
            color: "white",
            "font-weight": "bold",
            "text-valign": "center",
            "text-halign": "center",
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#94a3b8",
            "target-arrow-color": "#94a3b8",
            "target-arrow-shape": "triangle",
            label: "data(label)",
            "font-size": "10px",
            "curve-style": "bezier",
          },
        },
      ],
      layout: { name: "breadthfirst" },
    });

    return () => cy.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Family Tree</h1>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "600px",
          border: "2px solid #e5e7eb",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
