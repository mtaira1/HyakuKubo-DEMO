import { Header } from '../components/hyaku/Header';
import { Work } from '../components/hyaku/Work';
import { Footer } from '../components/hyaku/Footer';
import { useEffect } from 'react';

export function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <Work />
        </main>
        <Footer />
      </div>
    </div>
  );
}