
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const ApologyMessage: React.FC = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-100/20 border border-white space-y-8">
      <div className="space-y-8 text-slate-600 leading-[1.8] tracking-wide text-lg">
        <motion.p 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          className="font-light"
        >
          Hey Basma, I wanted to reach out and say I'm truly sorry for my blunders lately. You are such a <span className="font-semibold text-slate-800 underline decoration-pink-200 underline-offset-4">sweet, caring, and loving friend</span>, and I honestly don't know what I'd do without your kindness in my life.
        </motion.p>
        
        <motion.p 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-light"
        >
          I know I play the "big brother" role a bit too well sometimes—which usually means being stubborn or accidentally annoying—but please know it always comes from a place of care. You deserve nothing but the best treatment, and I'm sorry I fell short of that.
        </motion.p>

        <motion.p 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-light"
        >
          I was thinking today about that time we tried to have a "serious life discussion" that lasted exactly two minutes before we both dissolved into fits of laughter over a silly pun. Whether it’s our legendary debates over the best snacks or the way you always catch me making a ridiculous face when I’m trying to act "wise," those moments are my absolute favorites. You’re the only person who can turn my big-brother grumpiness into a genuine smile within seconds.
        </motion.p>
        
        <motion.p 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="font-light"
        >
          Our friendship is so precious to me. Thank you for being the amazing person you are and for always having such a big heart.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
      >
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-pink-50/50 border border-pink-100/50 hover:bg-pink-100/30 transition-colors cursor-default">
          <Heart size={20} className="text-pink-400 shrink-0" fill="currentColor" />
          <p className="text-sm font-medium text-pink-700 tracking-tight">Kindest soul I know</p>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50 hover:bg-blue-100/30 transition-colors cursor-default">
          <Sparkles size={20} className="text-blue-400 shrink-0" fill="currentColor" />
          <p className="text-sm font-medium text-blue-700 tracking-tight">Always brings the light</p>
        </div>
      </motion.div>

      <div className="text-center pt-8 border-t border-slate-50">
        <motion.p 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="font-dancing text-2xl text-slate-400 italic tracking-normal"
        >
          "I promise to be much better (and maybe only 5% annoying)."
        </motion.p>
      </div>
    </div>
  );
};

export default ApologyMessage;
