
import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Heart, color: 'text-pink-200', size: 24, top: '10%', left: '5%', delay: 'delay-1' },
    { Icon: Star, color: 'text-yellow-200', size: 20, top: '20%', left: '85%', delay: 'delay-2' },
    { Icon: Sparkles, color: 'text-blue-200', size: 28, top: '60%', left: '10%', delay: 'delay-3' },
    { Icon: Heart, color: 'text-purple-200', size: 32, top: '80%', left: '80%', delay: 'delay-1' },
    { Icon: Star, color: 'text-orange-100', size: 18, top: '40%', left: '90%', delay: 'delay-2' },
    { Icon: Sparkles, color: 'text-green-100', size: 22, top: '75%', left: '15%', delay: 'delay-3' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, i) => (
        <div
          key={i}
          className={`absolute animate-float ${el.delay}`}
          style={{ top: el.top, left: el.left }}
        >
          <el.Icon className={el.color} size={el.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
