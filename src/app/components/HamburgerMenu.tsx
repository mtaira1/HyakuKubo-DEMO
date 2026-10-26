import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'HOME', path: '/' },
  { label: 'PHOTOGRAPHY', path: '/photography' },
  { label: 'BOOK', path: '/book' },
  { label: 'FILM', path: '/video' },
  { label: 'BIO/CONTACT', path: '/bio-contact' },
];

export function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-white opacity-50 hover:opacity-100 hover:text-red-500 transition-colors text-3xl"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="text-white text-4xl md:text-6xl tracking-wider hover:text-red-500 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
