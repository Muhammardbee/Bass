
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import IntroNote from './components/IntroNote';
import ApologyMessage from './components/ApologyMessage';
import ForgivenessSection from './components/ForgivenessSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

const App: React.FC = () => {
  type ViewState = 'intro' | 'content';
  const [view, setView] = useState<ViewState>('intro');

  const handleOpen = () => {
    setView('content');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-tr from-[#fff1eb] via-[#fdf2f8] to-[#f5f3ff] bg-animate-gradient">
      <FloatingElements />

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-24 space-y-12 md:space-y-20">
        <Hero />

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {view === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
              >
                <IntroNote onOpen={handleOpen} />
              </motion.div>
            )}

            {view === 'content' && (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-12 md:space-y-20"
              >
                <ApologyMessage />
                <ForgivenessSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
