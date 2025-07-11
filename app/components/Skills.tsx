import React from "react";

const accent = "#516A76";

interface SkillItem {
  name: string;
  level?: string;
}

const skills: { category: string; items: SkillItem[] }[] = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "HTML5", level: "95" },
      { name: "CSS3", level: "95" },
      { name: "JavaScript", level: "90" },
      { name: "React.js", level: "50" },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      { name: "PHP", level: "95" },
      { name: "Laravel", level: "98" },
      { name: "CodeIgniter", level: "90" },
      { name: "MySQL", level: "90" },
      { name: "API Development", level: "90" },
      { name: "Symfony", level: "75" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: "95" },
      { name: "Responsive Design", level: "85" },
      { name: "Debugging", level: "90" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section" style={{ background: '#617F8D' }}>
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4" style={{ color: '#fff' }}>Technical Skills</h2>
      <div className="bg-white rounded-xl shadow p-8 dark:bg-gray-800 dark:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: accent }}>{group.category}</h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium dark:text-gray-200">{item.name}</span>
                      {item.level && (
                        <span style={{ color: accent, fontWeight: 600 }}>{item.level}%</span>
                      )}
                    </div>
                    {item.level && (
                      <div className="w-full rounded-full h-2.5" style={{ background: '#b0bbc1' }}>
                        <div
                          className="h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${item.level}%`, background: accent }}
                        ></div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;