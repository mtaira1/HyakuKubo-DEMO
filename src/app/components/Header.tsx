import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // ページタイトルを取得
  const getPageTitle = () => {
    if (location.pathname === '/photography') return 'PHOTOGRAPHY';
    if (location.pathname.startsWith('/photography/')) return null;
    if (location.pathname === '/book') return 'BOOK';
    if (location.pathname === '/video') return 'FILM';
    if (location.pathname === '/bio-contact') return 'BIO/CONTACT';
    return null;
  };

  const pageTitle = getPageTitle();

  // ホームページではヘッダー全体を非表示
  if (isHome) {
    return (
      <motion.header 
        className="fixed top-0 left-0 w-full z-50 px-8 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-end">
          {/* Right: Hamburger Menu */}
          <button
            onClick={onMenuClick}
            className="text-white hover:text-red-500 transition-colors flex flex-col gap-[7px] w-9"
            aria-label="Menu"
          >
            <span className="w-full h-[3px] bg-current"></span>
            <span className="w-full h-[3px] bg-current"></span>
            <span className="w-full h-[3px] bg-current"></span>
          </button>
        </div>
      </motion.header>
    );
  }

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 pl-[18px] pr-8 py-6 md:px-8 md:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        {/* Left: HYAKU KUBO */}
        <Link to="/" className="text-white text-sm md:text-xl tracking-wider font-bold hover:text-red-500 transition-colors">
          HYAKU KUBO
        </Link>

        {/* Center: Page Title */}
        {pageTitle && (
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-white text-xl tracking-widest mt-24 md:mt-0">{pageTitle}</h1>
          </motion.div>
        )}

        {/* Right: Hamburger Menu - プロジェクトページでは非表示 */}
        {!location.pathname.startsWith('/photography/') && (
          <button
            onClick={onMenuClick}
            className="text-white hover:text-red-500 transition-colors flex flex-col gap-[7px] w-9"
            aria-label="Menu"
          >
            <span className="w-full h-[3px] bg-current"></span>
            <span className="w-full h-[3px] bg-current"></span>
            <span className="w-full h-[3px] bg-current"></span>
          </button>
        )}
      </div>
    </motion.header>
  );
}