import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: "💻" },
        { name: "Python", icon: "🐍" },
        { name: "𝗝avaScript", icon: "𝗝𝗦" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Next.js", icon: "▲" },
         { name: "TypeScript", icon: "📘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐘" },
        { name: "Express Js", icon: "𝐄𝐱" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML", icon: "<>" },

      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: "📚" },
        { name: "Postman", icon: "📫" },
        { name: "Figma", icon: "✏️" },
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
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </h3>
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
                🎓 Bachelors of Technology
              </h3>
              <p className="text-muted-foreground">
                B.Tech in Computer Science from SRM University (2026)
              </p>
            </div>
            
            <div className="gradient-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Udemy
              </h3>
              <p className="text-muted-foreground">
                Ultimate Web Development Course - Build Modern Websites
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
