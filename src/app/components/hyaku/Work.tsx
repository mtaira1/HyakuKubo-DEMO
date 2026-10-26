import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';

// HYAKU KUBOの実際の写真
import photo1 from 'figma:asset/008c4a2f98cccff9e3c81ba32337286d571bcf04.png';
import photo2 from 'figma:asset/14df8c3a25087e215f895f194607bd641ecc7634.png';
import photo3 from 'figma:asset/6c07d460e7f928e6cb74e9778004620d9e168d0e.png';
import photo4 from 'figma:asset/35ac26a56104623dde0675450c47aa891b262983.png';
import photo5 from 'figma:asset/e61feed35f2013bc8f891a39c1ca33618ad4b1ba.png';
import photo6 from 'figma:asset/7434800fcb2afab03ed9bb8594d05c0b90168c2e.png';
import photo7 from 'figma:asset/52835199056848b00b57f798edf4893b1761ce76.png';
import photo8 from 'figma:asset/20b7d4ddd6bdfe2aaa11b22dcdbe95bfc9716cb8.png';
import photo9 from 'figma:asset/66cddfba9630da4a7b1bd71084a4a765c61f4b83.png';
import photo10 from 'figma:asset/82bfb42024c62aae6020cb9f1aa2994a30290647.png';
import photo11 from 'figma:asset/42a6b9466a9e347742228d84e9fa9d044a33a284.png';
import photo12 from 'figma:asset/5e2f4c682251585e91ffaa36f3a189f0e2d2eaad.png';
import photo13 from 'figma:asset/c1b37a6d8fed4a915a55f951a9406b402328578e.png';
import photo14 from 'figma:asset/a42dbd633135fec8ce84737bd245482c4588512e.png';

const clientWork = [
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

const personalWork = [
  {
    id: 1,
    src: photo7,
    title: 'Kitchen Dreams'
  },
  {
    id: 2,
    src: photo8,
    title: 'Yellow Field'
  },
  {
    id: 3,
    src: photo9,
    title: 'Doll Art'
  },
  {
    id: 4,
    src: photo10,
    title: 'Psychedelic Dots'
  },
  {
    id: 5,
    src: photo11,
    title: 'Coffee Mood'
  },
  {
    id: 6,
    src: photo12,
    title: 'Ghost Hand'
  }
];

const modelingWork = [
  {
    id: 1,
    src: photo13,
    title: 'Subway Dreams'
  },
  {
    id: 2,
    src: photo14,
    title: 'Wall Street'
  },
  {
    id: 3,
    src: photo1,
    title: 'Dark Portrait'
  },
  {
    id: 4,
    src: photo2,
    title: 'Blur Motion'
  },
  {
    id: 5,
    src: photo3,
    title: 'Club Scene'
  },
  {
    id: 6,
    src: photo4,
    title: 'Light Rays'
  }
];

const galleryWork = [
  {
    id: 1,
    src: photo5,
    title: 'Plant Life'
  },
  {
    id: 2,
    src: photo6,
    title: 'Field Portrait'
  },
  {
    id: 3,
    src: photo7,
    title: 'Double Exposure'
  },
  {
    id: 4,
    src: photo8,
    title: 'Flower Hat'
  },
  {
    id: 5,
    src: photo9,
    title: 'Monochrome Art'
  },
  {
    id: 6,
    src: photo10,
    title: 'Pattern Vision'
  }
];

export function Work() {
  const [activeTab, setActiveTab] = useState<'work' | 'personal' | 'modeling' | 'gallery'>('work');
  const { t } = useLanguage();

  const currentWork = activeTab === 'work' ? clientWork : activeTab === 'personal' ? personalWork : activeTab === 'modeling' ? modelingWork : galleryWork;

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

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-3 border-2 uppercase tracking-widest text-base md:text-lg transition-all ${
              activeTab === 'work'
                ? 'bg-red-500 border-red-500 text-white'
                : 'border-white text-white hover:border-red-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.work')}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-3 border-2 uppercase tracking-widest text-base md:text-lg transition-all ${
              activeTab === 'personal'
                ? 'bg-red-500 border-red-500 text-white'
                : 'border-white text-white hover:border-red-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.personal')}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('modeling')}
            className={`px-6 py-3 border-2 uppercase tracking-widest text-base md:text-lg transition-all ${
              activeTab === 'modeling'
                ? 'bg-red-500 border-red-500 text-white'
                : 'border-white text-white hover:border-red-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.modeling')}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-3 border-2 uppercase tracking-widest text-base md:text-lg transition-all ${
              activeTab === 'gallery'
                ? 'bg-red-500 border-red-500 text-white'
                : 'border-white text-white hover:border-red-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.gallery')}
          </motion.button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWork.map((work, index) => (
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
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <motion.div 
                className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-2xl font-bold tracking-wider uppercase">
                  {work.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}