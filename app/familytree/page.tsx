"use client";

import React, { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";

// ⚠️ Remove this direct import:
// import dagre from "cytoscape-dagre";
// cytoscape.use(dagre);

export default function FamilyTreePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<any[]>([]);
  const [layoutReady, setLayoutReady] = useState(false);

  useEffect(() => {
    import("cytoscape-dagre").then((dagre) => {
      cytoscape.use(dagre.default);
      console.log("✅ Dagre layout registered dynamically");
      setLayoutReady(true);
    });
    async function fetchData() {
      try {
        // 🔹 Fetch relationships with nested person info
        const res = await fetch("http://localhost:8080/api/relationships");

        const data = await res.json();

        const nodesMap = new Map<string, any>();
        const edges: any[] = [];

        data.forEach((rel: any) => {
          const from = rel.fromPerson;
          const to = rel.toPerson;

          if (from && !nodesMap.has(from.id)) {
            nodesMap.set(from.id, {
              data: { id: from.id, label: `${from.givenName} ${from.familyName}`, gender: from.gender },
            });
          }
          if (to && !nodesMap.has(to.id)) {
            nodesMap.set(to.id, {
              data: { id: to.id, label: `${to.givenName} ${to.familyName}`, gender: to.gender },
            });
          }

          edges.push({
            data: { source: from.id, target: to.id, label: rel.relType },
          });
        });

        const allElements = [...Array.from(nodesMap.values()), ...edges];
        setElements(allElements);
      } catch (error) {
        console.error("Error fetching relationships:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
  if (!containerRef.current || elements.length === 0 || !layoutReady) return;
  
    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": (ele) =>
              ele.data("gender") === "F" ? "#f472b6" : "#2563eb",
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
            width: 2,
            "line-color": "#94a3b8",
            "target-arrow-color": "#94a3b8",
            "target-arrow-shape": "triangle",
            label: "data(label)",
            "font-size": "10px",
            "curve-style": "bezier",
          },
        },
      ],
      layout: { name: "dagre", rankDir: "TB", padding: 20 },
    });

    return () => cy.destroy();
  }, [elements]);

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
