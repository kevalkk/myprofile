import React from "react";

const accent = "#516A76";

const otherSkills: string[] = [
  "RESTful APIs",
  "MVC Architecture",
  "Database Design",
  "Version Control",
  "Project Management",
  "Team Collaboration",
  "Code Review",
  "Testing",
  "Performance Optimization",
  "Security Best Practices",
  "Agile Development",
];

const OtherSkills = () => (
  <section id="other-skills" className="section" style={{ background: '#617F8D' }}>
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4" style={{ color: '#fff' }}>Other Skills & Interests</h2>
      <div className="bg-white rounded-xl shadow p-8 dark:bg-gray-800 dark:shadow-lg">
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((skill) => (
            <button
              key={skill}
              className="px-4 py-2 rounded-lg font-medium shadow-sm transition"
              style={{ background: '#b0bbc1', color: accent }}
              type="button"
              tabIndex={-1}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OtherSkills; 