import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] bg-gray-900 flex items-end sm:items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1492607997977-ce9d3434de52?auto=format&fit=crop&q=80&w=2000" 
        alt="Collection Campaign"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-20 sm:mb-0 max-w-3xl">
        <span className="text-white/80 font-medium tracking-widest text-sm uppercase mb-4 block">Season 24 Collection</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
          The New Definition of Street Luxury.
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 font-medium text-sm hover:bg-gray-100 transition-colors flex items-center justify-center">
            Shop New Arrivals
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
