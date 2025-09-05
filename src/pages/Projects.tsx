import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;

}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="gradient-card rounded-xl overflow-hidden hover:glow-primary transition-all duration-300"
        whileHover={{ 
          scale: 1.03, 
          rotateY: 5, 
          rotateX: 2,
          z: 50 
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
      >
        {/* Project Image/Icon */}
        <motion.div 
          className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={isHovered ? { 
              rotateY: 360,
              scale: 1.2
            } : {}}
            transition={{ duration: 0.8 }}
          >
            {project.image}
          </motion.div>
          
          {/* Animated overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <div className="p-6 relative">
          <motion.h3 
            className="text-2xl font-bold text-foreground mb-3"
            animate={isHovered ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground mb-4 leading-relaxed"
            animate={isHovered ? { x: 3 } : { x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: isHovered ? techIndex * 0.1 : 0,
                  duration: 0.3
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "hsl(var(--primary) / 0.3)"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Links */}
          <motion.div 
            className="flex gap-4"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Anonex",
      description: "AI-powered anonymous feedback platform: share your link, get feedback, and let AI craft thoughtful replies.",
      image: "🗨️",
      tech: ["Nextjs", "TypeScript", "MongoDB", "Resend", "OenAI API", "Mongoose"],
      github: "https://github.com/anirudh-731/anonex",
    
    },
    {
      title: "WexFord",
      description: "A secure Razorpay-integrated NextAuth app for seamless authentication and payment handling.",
      image: "💰",
      tech: [ "Next.js", "NextAuth", "Tailwind CSS", "Razorpay", "Mongoose", "MongoDB"],
      github: "https://github.com/anirudh-731/WexFord",
    
    },
  
    {
      title: "BitTree",
      description: "A Next.js & MongoDB-powered Linktree clone to organize and showcase multiple links in one place.",
      image: "🌳",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Lucide-react", "Framer-motion"],
      github: "https://github.com/anirudh-731/bittree",
    
    },
    {
      title: "BitLinks",
      description: "A URL shortener built with Next.js & MongoDB for creating and managing concise, shareable links.",
      image: "🔗",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Lucide-react"],
      github: "https://github.com/anirudh-731/bitlinks",
    
    },
    {
      title: "VaultX",
      description: "A robust password manager that safely stores and manages user credentials with encryption and easy access.",
      image: "🔒",
      tech: ["React", "Tailwind CSS", "Toastify", "Vite"],
      github: "https://github.com/anirudh-731/vaultx",
    
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
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

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