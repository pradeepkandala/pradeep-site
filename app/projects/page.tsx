// app/projects/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Family Tree App</h3>
              <p className="text-gray-600 mb-4">
                Visual ancestry platform (Spring Boot + React).
              </p>
              {/* Add GitHub/demo links here */}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Project ISM</h3>
              <p className="text-gray-600 mb-4">
                Indian social platform prototype rooted in dharma.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
