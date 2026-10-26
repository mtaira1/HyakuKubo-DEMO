import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router';

// HYAKU KUBOの実際の写真
import photo1 from 'figma:asset/008c4a2f98cccff9e3c81ba32337286d571bcf04.png';
import photo2 from 'figma:asset/14df8c3a25087e215f895f194607bd641ecc7634.png';
import photo3 from 'figma:asset/6c07d460e7f928e6cb74e9778004620d9e168d0e.png';
import photo4 from 'figma:asset/35ac26a56104623dde0675450c47aa891b262983.png';
import photo5 from 'figma:asset/e61feed35f2013bc8f891a39c1ca33618ad4b1ba.png';
import photo6 from 'figma:asset/7434800fcb2afab03ed9bb8594d05c0b90168c2e.png';

// プレビュー用に6枚だけ表示
const previewWork = [
  {
    id: 1,
    src: photo1,
    title: 'Dark Glitch'
  },
  {
    id: 2,
    src: photo2,
    title: 'Blue Blur'
  },
  {
    id: 3,
    src: photo3,
    title: 'Club Energy'
  },
  {
    id: 4,
    src: photo4,
    title: 'Orange Light'
  },
  {
    id: 5,
    src: photo5,
    title: 'Botanical Hand'
  },
  {
    id: 6,
    src: photo6,
    title: 'The Marylane'
  }
];

export function WorkPreview() {
  const { t } = useLanguage();

  return (
    <section id="work" className="min-h-screen py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-red-500 mb-16 text-center tracking-widest"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('work.title')}
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewWork.map((work, index) => (
            <motion.div
              key={work.id}
              className="relative aspect-square overflow-hidden group cursor-pointer border-4 border-transparent hover:border-red-500 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback 
                src={work.src}
                alt={work.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-bold tracking-widest">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MORE Button */}
        <div className="flex justify-center">
          <Link to="/work">
            <motion.button
              className="px-12 py-4 border-4 border-red-500 text-red-500 text-2xl font-bold tracking-widest hover:bg-red-500 hover:text-black transition-all uppercase"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              MORE
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}