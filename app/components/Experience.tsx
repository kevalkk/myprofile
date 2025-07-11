import React from "react";

const accent = "#516A76";

const techButtonStyle = {
  background: '#b0bbc1',
  color: accent,
  border: 'none',
  fontWeight: 500,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  cursor: 'default',
};

const Experience = () => (
  <section id="experience" className="section" style={{ background: '#617F8D' }}>
    <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-between">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4" style={{ color: '#fff' }}>Professional Experience</h2>
      <div className="bg-white rounded-xl shadow p-8 space-y-8 dark:bg-gray-800 dark:shadow-lg w-full">
        {/* Perfect Web Tech */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: accent }}>Full Stack Developer <span className="text-gray-700 font-normal dark:text-gray-200">- Perfect Web Tech</span></h3>
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-2 dark:text-gray-300">
            <span>March 2013 – Present</span>
            <span>Rajkot, Gujarat, India</span>
            {/* <span>Full-time</span> */}
          </div>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            Working as a Full Stack Developer focusing on Laravel, PHP, and React Native for mobile app development.
          </p>
          <div className="mb-2 font-semibold" style={{ color: accent }}>Key Responsibilities:</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 dark:text-gray-200">
            <li>Building dynamic web applications and mobile apps using REST APIs</li>
            <li>Collaborating with designers and backend teams to create responsive and scalable applications</li>
            <li>Performing debugging, API integrations, and handling database relationships using MySQL</li>
            <li>Working with Laravel framework for backend development</li>
          </ul>
          <div className="mt-4 mb-2 font-semibold" style={{ color: accent }}>Technologies Used:</div>
          <div className="flex flex-wrap gap-2">
            {['Laravel', 'CodeIgniter', 'PHP', 'Next.js', 'MySQL', 'REST APIs'].map((tech) => (
              <button key={tech} style={techButtonStyle} tabIndex={-1} type="button">{tech}</button>
            ))}
          </div>
        </div>
        {/* Keshav Infotech */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: accent }}>Web Developer <span className="text-gray-700 font-normal dark:text-gray-200">- Keshav Infotech</span></h3>
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-2 dark:text-gray-300">
            <span>March 2012 – March 2013</span>
            <span>Rajkot, Gujarat, India</span>
          </div>
          <p className="text-gray-700 mb-2 dark:text-gray-200">
            Worked as a Web Developer, delivering custom PHP-based solutions and e-commerce platforms tailored to client requirements. Focused on backend development, database management, and seamless API integrations to enhance user experience and business functionality.
          </p>
          <div className="mb-2 font-semibold" style={{ color: accent }}>Key Responsibilities:</div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 dark:text-gray-200">
            <li>Developed and maintained custom PHP web applications for diverse business needs</li>
            <li>Implemented and optimized e-commerce solutions for premium service platforms</li>
            <li>Integrated third-party APIs to extend application functionality</li>
            <li>Managed MySQL databases and ensured data integrity</li>
          </ul>
          <div className="mt-4 mb-2 font-semibold" style={{ color: accent }}>Technologies Used:</div>
          <div className="flex flex-wrap gap-2">
            {['PHP', 'CodeIgniter', 'MySQL', 'REST APIs'].map((tech) => (
              <button key={tech} style={techButtonStyle} tabIndex={-1} type="button">{tech}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;