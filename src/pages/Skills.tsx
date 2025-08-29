import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Three.js", level: 75, icon: "🎮" },
        { name: "Framer Motion", level: 80, icon: "🎬" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "GraphQL", level: 70, icon: "📊" },
        { name: "Redis", level: 72, icon: "🔴" },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 95, icon: "📚" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Kubernetes", level: 65, icon: "⚙️" },
        { name: "CI/CD", level: 78, icon: "🔄" },
        { name: "Terraform", level: 60, icon: "🏗️" },
      ]
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
            My Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="gradient-card rounded-xl p-6 hover:glow-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-accent font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className="h-full gradient-primary rounded-full relative"
                      >
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                      animate-pulse group-hover:animate-none" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Certifications & Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="gradient-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                🎓 Computer Science Degree
              </h3>
              <p className="text-muted-foreground">
                Bachelor's in Computer Science from University Name (2020)
              </p>
            </div>
            
            <div className="gradient-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ☁️ AWS Certified Solutions Architect
              </h3>
              <p className="text-muted-foreground">
                Professional level certification in cloud architecture (2023)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;