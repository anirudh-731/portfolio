import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/Scene3D';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient mt-4">
                Anirudh M Rao
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90">
                Software Developer
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0"
            >
              I create exceptional digital experiences through innovative web development,
              combining creativity with cutting-edge technology to bring ideas to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="gradient-primary text-primary-foreground hover:scale-105 transition-transform glow-primary"
              >
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <a href="/Anirudh_Resume.pdf" download className="flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/projects"
                className="text-accent hover:text-accent/80 transition-colors flex items-center group"
              >
                View My Work
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative gradient-card rounded-2xl p-6 sm:p-8 glow-primary w-full max-w-md sm:max-w-lg">
              <Scene3D className="w-full h-64 sm:h-80 md:h-96" />

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full glow-cyan"
              />

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 bg-neon-purple/30 rounded-full glow-purple"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
