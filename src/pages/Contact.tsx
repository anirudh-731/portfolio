import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useHref } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ani.m.rao@gmail.com",
      href: "#"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6379097391",
      href: "#"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/anirudh-731/"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anirudh-m-rao-70697724b/"
    },
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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
  {/* Contact Form */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    className="order-2 lg:order-1"
  >
    <span className="text-base sm:text-lg block mb-4 text-muted-foreground">
      *This feature is coming soon*
    </span>
    <Card className="gradient-card p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
        Send Me a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="bg-background/50 border-border focus:border-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-transform glow-primary"
          size="lg"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>
      </form>
    </Card>
  </motion.div>

  {/* Contact Info + Social + Availability */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
    className="space-y-8 order-1 lg:order-2"
  >
    {/* Contact Details */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
        Contact Information
      </h2>
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
          >
            <Card className="gradient-card p-4 sm:p-6 hover:glow-primary transition-all duration-300">
              <div className="flex items-start sm:items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{info.label}</h3>
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
        Connect With Me
      </h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 sm:w-12 sm:h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Availability */}
    <Card className="gradient-card p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
        Current Availability
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-4">
        I'm currently available for new projects and collaborations. 
        Let's create something amazing together!
      </p>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-neon-green rounded-full animate-pulse" />
        <span className="text-neon-green font-medium text-sm sm:text-base">
          Available for hire
        </span>
      </div>
    </Card>
  </motion.div>
</div>

      </div>
    </div>
  );
};

export default Contact;