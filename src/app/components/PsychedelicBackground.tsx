import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function PsychedelicBackground() {
  const [dots, setDots] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const cols = 20;
      const rows = 20;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          newDots.push({
            x: (i / cols) * 100,
            y: (j / rows) * 100,
            size: Math.random() * 30 + 20,
            delay: Math.random() * 2
          });
        }
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.8, 0.4, 0.3],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
