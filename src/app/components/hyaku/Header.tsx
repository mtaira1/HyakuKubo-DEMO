import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Header() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const isHomePage = location.pathname === '/';

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8,
        delay: isHomePage ? 6 : 0,
        ease: "easeOut"
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center" style={{ boxShadow: '0 1px 0 0 rgba(255, 255, 255, 0.1)' }}>
        <Link to="/" className="text-2xl font-bold text-white hover:text-red-500 transition-colors">
          HYAKU KUBO
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {['home', 'about', 'work', 'contact'].map((item) => (
            <motion.li key={item}>
              <Link 
                to={item === 'work' ? '/work' : '/'}
                className="text-white uppercase tracking-wider hover:text-red-500 transition-colors"
                onClick={() => {
                  if (item === 'work') {
                    return;
                  }
                  if (!isHomePage) {
                    setTimeout(() => {
                      scrollToSection(item);
                    }, 100);
                  } else {
                    scrollToSection(item);
                  }
                }}
              >
                {item === 'work' ? 'WORK' : item.toUpperCase()}
              </Link>
            </motion.li>
          ))}
          
          {/* Language Switcher */}
          <li className="flex gap-2 ml-4">
            <motion.button
              onClick={() => setLanguage('en')}
              className={`relative ${language === 'en' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'} transition-all`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Switch to English"
              style={{ width: '48px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="absolute left-0 top-0 text-2xl" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>🇺🇸</span>
              <span className="absolute right-0 top-0 text-2xl" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>🇬🇧</span>
            </motion.button>
            <motion.button
              onClick={() => setLanguage('ja')}
              className={`text-2xl ${language === 'ja' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'} transition-all`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Switch to Japanese"
            >
              🇯🇵
            </motion.button>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};