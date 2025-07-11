import React from "react";

const accent = "#516A76";

const About = () => (
  <section id="about" className="section" style={{ background: '#617F8D' }}>
    <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-between">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4" style={{ color: '#fff' }}>About Me</h2>
      <div className="bg-white rounded-xl shadow p-8 dark:bg-gray-800 dark:shadow-lg w-full">
        <h3 className="text-xl font-semibold mb-2" style={{ color: accent }}>Who I Am</h3>
        <p className="text-gray-700 mb-2 dark:text-gray-200">
          I have worked on a variety of web applications ranging from small-scale to enterprise-level projects. I enjoy building scalable and secure web solutions. Successful at achieving browser, device, and operating system compatibility objectives while satisfying client desires and producing robust, sophisticated designs.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          I am passionate about delivering high-quality, maintainable code and continuously learning new technologies to improve my craft.
        </p>
      </div>
    </div>
  </section>
);

export default About;