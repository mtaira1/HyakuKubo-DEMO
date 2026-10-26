import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1646101641345-a1abad136276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGJsYWNrJTIwd2hpdGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQzODEyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">
          Capturing Moments,<br />Creating Memories
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Professional photography that tells your unique story
        </p>
        <button 
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors text-lg"
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
}
