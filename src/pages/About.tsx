import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gradient mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-card rounded-2xl p-10 text-center">
              <div className="w-64 h-64 mx-auto bg-primary/20 rounded-full flex items-center justify-center glow-primary">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Hello! I'm a Full Stack Developer
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a strong foundation in development, I specialize in building modern, responsive, and user-friendly applications using technologies like React, Next.js, Node.js, and cloud deployment platforms.
              </p>
              <p>
                I enjoy combining creativity with cutting-edge tools to create digital experiences that are functional & visually engaging. My journey started with a curiosity about how software applicatons work, and it has grown into a passion for solving real-world problems through innovative development. 
              </p>
              
            </div>
          </motion.div>
        </div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Full Stack Development",
                description: "Building end-to-end web applications with modern frameworks and technologies."
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating intuitive and visually appealing user interfaces that enhance user experience."
              },
              {
                icon: Rocket,
                title: "Performance Optimization",
                description: "Optimizing applications for speed, scalability, and optimal user performance."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="gradient-card rounded-xl p-6 text-center group hover:glow-primary transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;