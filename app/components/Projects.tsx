import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with Next.js, TypeScript, and Stripe. Features include user authentication, product management, shopping cart, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    image: "/project1.jpg",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform.vercel.app",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/project2.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-app.vercel.app",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather and forecasts using OpenWeatherMap API with interactive charts and maps.",
    technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
    image: "/project3.jpg",
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-dashboard.vercel.app",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode support.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/project4.jpg",
    github: "https://github.com/yourusername/portfolio",
    live: "https://kevalmer.vercel.app",
    featured: false
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
    technologies: ["React", "Firebase", "Material-UI", "React Router"],
    image: "/project5.jpg",
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app.vercel.app",
    featured: false
  },
  {
    title: "Recipe Finder",
    description: "A recipe discovery app that helps users find recipes based on available ingredients and dietary preferences.",
    technologies: ["React", "Spoonacular API", "Redux", "Styled Components"],
    image: "/project6.jpg",
    github: "https://github.com/yourusername/recipe-finder",
    live: "https://recipe-finder.vercel.app",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-100">{project.description.substring(0, 100)}...</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Eye size={20} className="text-white" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Other Projects</h3>
          <p className="text-muted">More projects I&apos;ve worked on</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div 
              key={index} 
              className="card group hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex space-x-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted mb-6">Interested in working together?</p>
          <a href="#contact" className="btn-primary">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;