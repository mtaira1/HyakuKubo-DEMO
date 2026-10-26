import { motion } from 'motion/react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { HamburgerMenu } from '../components/HamburgerMenu';

export function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="pt-32 px-8 md:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-white space-y-12">
            <div>
              <p className="text-base md:text-lg leading-relaxed opacity-80 text-center">
                Hyaku Kubo, born and raised in Tokyo, moved to Los Angeles at 19, where he began photographing the people and moments around him. His work moves between documentary and fashion, shaped by youth culture, intimacy, and the subtle strangeness of everyday life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
