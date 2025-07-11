import React from "react";

const accent = "#516A76";

const Education = () => (
  <section id="education" className="section" style={{ background: '#617F8D' }}>
    <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-between">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4" style={{ color: '#fff' }}>Education</h2>
      <div className="bg-white rounded-xl shadow p-8 space-y-8 dark:bg-gray-800 dark:shadow-lg w-full">
        {/* MCA */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: accent }}>MCA - Master of Computer Application</h3>
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-2 dark:text-gray-300">
            <span>IGNOU University, Rajkot</span>
            <span>Mar 2013</span>
          </div>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            Advanced coursework in computer science and IT, focusing on software architecture, enterprise application development, and emerging technologies. Developed expertise in full-stack development, cloud computing, and advanced database management. Engaged in research projects and collaborative software engineering.
          </p>
          <div className="mb-2 font-semibold" style={{ color: accent }}>Key Highlights:</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 dark:text-gray-200">
            <li>Enterprise Application Development & Software Architecture</li>
            <li>Cloud Computing & Advanced Database Management</li>
            <li>Research Projects in Modern Web Technologies</li>
            <li>Team Collaboration & Agile Methodologies</li>
          </ul>
        </div>
        {/* PGDCA */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: accent }}>PGDCA - Post Graduate Diploma in Computer Application</h3>
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-2 dark:text-gray-300">
            <span>IGNOU University, Rajkot</span>
            <span>Mar 2010</span>
          </div>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            Specialized in foundational and advanced concepts of computer applications, including programming, database systems, and software engineering. Gained practical experience through lab work and mini-projects, enhancing problem-solving and analytical skills.
          </p>
          <div className="mb-2 font-semibold" style={{ color: accent }}>Key Highlights:</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 dark:text-gray-200">
            <li>Programming and Software Development</li>
            <li>Database Systems & Software Engineering</li>
            <li>Hands-on Lab Work & Mini-Projects</li>
            <li>Problem-Solving and Analytical Skills</li>
          </ul>
        </div>
        {/* BCA */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: accent }}>BCA - Bachelor of Computer Application</h3>
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-2 dark:text-gray-300">
            <span>Atmiya University Rajkot</span>
            <span>Mar 2009</span>
          </div>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            Focused on computer science and IT subjects with an emphasis on programming, software development, and web technologies. Simultaneously pursued web development through self-learning and internships.
          </p>
          <div className="mb-2 font-semibold" style={{ color: accent }}>Key Highlights:</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 dark:text-gray-200">
            <li>Programming and Software Development</li>
            <li>Web Technologies and Application Development</li>
            <li>Self-learning in Web Development</li>
            <li>Practical Experience through Internships</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education; 