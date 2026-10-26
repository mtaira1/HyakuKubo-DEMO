import { motion } from 'motion/react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { HamburgerMenu } from '../components/HamburgerMenu';

export function BookPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="pt-44 px-8 md:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-white text-3xl md:text-5xl mb-12 tracking-wider">
            WORK IN PROGRESS
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
