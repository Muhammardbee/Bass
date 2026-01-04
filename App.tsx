import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ApologyMessage from './components/ApologyMessage';
import ForgivenessSection from './components/ForgivenessSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-tr from-[#fff1eb] via-[#fdf2f8] to-[#f5f3ff] bg-animate-gradient">
      <FloatingElements />

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 md:py-24 space-y-12 md:space-y-20">
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ApologyMessage />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ForgivenessSection />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
