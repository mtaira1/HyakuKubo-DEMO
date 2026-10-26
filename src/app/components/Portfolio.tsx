import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const categories = ['All', 'Landscape', 'Portrait', 'Wedding', 'Urban', 'Wildlife', 'Architecture'];

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1701309273089-1850b5d73a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBtb3VudGFpbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDM3NDAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Landscape',
    title: 'Mountain Vista'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1665021758862-8d6f857c40fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3NDQ3NTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portrait',
    title: 'Natural Light Portrait'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1654512721615-5622d6ede1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0NDEzMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wedding',
    title: 'Wedding Day'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1762436933065-fe6d7f51d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDQ2MzI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Urban',
    title: 'City Streets'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1702483852338-070c3ca031d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB3aWxkbGlmZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDQ2MDI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wildlife',
    title: 'Wildlife Wonder'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1620714800629-8a2eaafff4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGhvdG9ncmFwaHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQ0OTA0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Architecture',
    title: 'Modern Architecture'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1701304223298-3bc61cb6955d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQ0OTA0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Landscape',
    title: 'Golden Hour'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1646101641345-a1abad136276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGJsYWNrJTIwd2hpdGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQzODEyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portrait',
    title: 'Monochrome Study'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-12">Portfolio</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 transition-colors ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden aspect-square cursor-pointer"
            >
              <ImageWithFallback 
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-300">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
