import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router';
import aboutPhoto from 'figma:asset/3701241a287258ceec3302573b0f215166e3b2ea.png';

export function About() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="about" className="min-h-screen py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-red-500 mb-16 text-center tracking-widest"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback 
                src={aboutPhoto}
                alt="Hyaku Kubo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="pt-6">
              <p className="text-3xl font-bold tracking-widest text-red-500 uppercase mb-2">Photographer</p>
              <p className="text-sm opacity-60 uppercase tracking-wider">Model</p>
            </div>
            <motion.button
              onClick={() => navigate('/work')}
              className="mt-6 px-8 py-4 bg-red-500 text-white uppercase tracking-widest hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('about.cta')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}