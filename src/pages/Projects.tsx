import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "🛒",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates using Socket.io",
      image: "📝",
      tech: ["React", "Socket.io", "MongoDB", "Express"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing capabilities",
      image: "🤖",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps",
      image: "🌤️",
      tech: ["Vue.js", "D3.js", "Weather API", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with 3D animations and particle effects",
      image: "🎨",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Crypto Tracker",
      description: "Cryptocurrency price tracking with real-time charts",
      image: "💰",
      tech: ["React", "Chart.js", "CoinGecko API", "Redux"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gradient mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group"
            >
              <div className="gradient-card rounded-xl overflow-hidden hover:glow-primary transition-all duration-300 group-hover:scale-105">
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex-1 gradient-primary text-primary-foreground hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="gradient-card rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <Button
              className="gradient-primary text-primary-foreground hover:scale-105 transition-transform glow-primary"
              size="lg"
              asChild
            >
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;