import { motion } from 'motion/react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { HamburgerMenu } from '../components/HamburgerMenu';
import bioPhoto from '../../imports/FILM_BW_INDIVIDUALS043_copy__1_.jpg';

const InstagramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FED576" />
        <stop offset="25%" stopColor="#F47133" />
        <stop offset="50%" stopColor="#BC3081" />
        <stop offset="100%" stopColor="#4C63D2" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#igGrad)" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="4" stroke="url(#igGrad)" strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igGrad)" />
  </svg>
);


export function BioContactPage() {
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
          className="max-w-2xl mx-auto flex flex-col items-center gap-10"
        >
          <p className="text-base md:text-lg leading-relaxed text-white opacity-80 text-center">
            Hyaku Kubo, born and raised in Tokyo, moved to Los Angeles at 19, where he began photographing the world around him. His work moves between documentary and fashion, caught between rage and the pursuit of peace.
          </p>

          <div className="flex flex-col items-center gap-6">
            <img
              src={bioPhoto}
              alt="Hyaku Kubo"
              className="w-full max-w-xs object-cover"
            />

            <p className="text-white opacity-60 text-xs tracking-widest uppercase">
              Photography by Zach Serrano
            </p>

            <a
              href="https://www.instagram.com/hyakubo100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <InstagramIcon />
            </a>

            <a
              href="mailto:kubohyaku@gmail.com"
              className="text-white opacity-80 hover:opacity-100 hover:text-red-500 transition-colors tracking-wider text-sm md:text-base"
            >
              kubohyaku@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
