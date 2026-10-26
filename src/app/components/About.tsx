import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Award, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-square overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1706661912765-7d0f68289a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ0OTA0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Alex Morgan - Photographer"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl">Hi, I'm Alex Morgan</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 10 years of experience in photography, I specialize in capturing the beauty 
              of life's most precious moments. My passion lies in telling stories through my lens, 
              whether it's the grandeur of nature, the intimacy of a wedding, or the energy of urban life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in San Francisco, I work with clients worldwide to create timeless images that 
              evoke emotion and preserve memories. Every project is a new adventure, and I bring 
              dedication, creativity, and attention to detail to each shoot.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
                <Camera size={20} />
                <span>10+ Years</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
                <Users size={20} />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100">
                <Award size={20} />
                <span>Award Winner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black text-white">
              <Camera size={32} />
            </div>
            <h4 className="text-xl mb-3">Event Photography</h4>
            <p className="text-gray-600">
              Weddings, corporate events, and special occasions captured with artistry and professionalism.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black text-white">
              <Users size={32} />
            </div>
            <h4 className="text-xl mb-3">Portrait Sessions</h4>
            <p className="text-gray-600">
              Individual, family, and professional portraits that showcase personality and authenticity.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black text-white">
              <Heart size={32} />
            </div>
            <h4 className="text-xl mb-3">Creative Projects</h4>
            <p className="text-gray-600">
              Commercial work, editorial shoots, and custom photography projects tailored to your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
