
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center pt-12 pb-8 space-y-4">
      <div className="space-y-1">
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
          Always your big brother,
        </p>
        <h2 className="text-5xl font-dancing text-slate-800 drop-shadow-sm">
          Muhammad <span className="text-blue-400 inline-block animate-pulse">🤍</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
