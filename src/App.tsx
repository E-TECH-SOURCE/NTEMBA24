import { useState } from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { Product, PRODUCTS } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleProductClick = (product: Product) => {
    setActiveProduct(product);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setActiveProduct(null);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} onLogoClick={handleGoHome} />

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            
            {/* Featured Products Section */}
            <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">Latest Arrivals</h2>
                  <p className="text-gray-500 text-sm">Curated silhouettes for the current season.</p>
                </div>
                <a href="#" className="hidden sm:inline-block text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition-colors">
                  View All
                </a>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {PRODUCTS.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => handleProductClick(product)} 
                  />
                ))}
              </div>
              <div className="mt-8 text-center sm:hidden">
                <a href="#" className="inline-block text-sm font-medium border border-black px-6 py-3 w-full uppercase tracking-wider">
                  View All Arrivals
                </a>
              </div>
            </section>
          </>
        )}

        {currentView === 'product' && activeProduct && (
          <ProductDetail 
            product={activeProduct} 
            onBack={handleGoHome} 
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
