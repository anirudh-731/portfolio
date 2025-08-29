import React from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import PrismsBackground from './PrismsBackground';

const Layout = () => {
  return (
    <div className="min-h-screen gradient-hero relative">
      <PrismsBackground />
      <Navigation />
      <motion.main
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default Layout;