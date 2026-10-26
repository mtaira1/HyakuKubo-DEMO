import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="relative z-20 bg-black shadow-[0_-4px_20px_rgba(255,255,255,0.15)] py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          className="text-white opacity-60 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          HYAKU KUBO
        </motion.p>
      </div>
    </footer>
  );
}