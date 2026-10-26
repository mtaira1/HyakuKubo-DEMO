import { motion } from 'motion/react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { HamburgerMenu } from '../components/HamburgerMenu';

const InstagramIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FED576', stopOpacity: 1 }} />
        <stop offset="25%" style={{ stopColor: '#F47133', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#BC3081', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4C63D2', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagramGradient)" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4" stroke="url(#instagramGradient)" strokeWidth="2" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagramGradient)"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M2 7L12 13L22 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="pt-40 px-8 md:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <a
            href="mailto:hyakukubo@example.com"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors group"
          >
            <EmailIcon />
            <span className="text-lg opacity-80 group-hover:opacity-100 tracking-wider">
              hyakukubo@example.com
            </span>
          </a>

          <a
            href="https://www.instagram.com/hyakubo100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors group"
          >
            <InstagramIcon />
            <span className="text-lg opacity-80 group-hover:opacity-100 tracking-wider">
              @hyakubo100
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
