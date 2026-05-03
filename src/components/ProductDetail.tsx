import { AlertCircle, ChevronLeft, Heart, Info, RefreshCw, ShieldCheck, Star } from 'lucide-react';
import { useState } from 'react';
import { Product, PRODUCTS } from '../data';
import { ProductCard } from './ProductCard';

export function ProductDetail({ product, onBack, onAddToCart, onProductClick }: { product: Product; onBack: () => void; onAddToCart: () => void; onProductClick: (p: Product) => void }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ['S', 'M', 'L', 'XL'];
  
  // Get visually similar products out of the list as 'Cross-sell'
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Mobile Back Button */}
      <div className="px-4 py-3 md:hidden flex items-center bg-white border-b border-gray-100 sticky top-16 z-30">
        <button onClick={onBack} className="flex items-center text-sm font-medium text-gray-600">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8 mt-0 md:mt-8">
        {/* Breadcrumb (Desktop) */}
        <div className="hidden md:flex mb-6 items-center text-sm text-gray-500">
          <button onClick={onBack} className="hover:text-black">Home</button>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-0 md:gap-12 lg:gap-16">
          {/* Images Section */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
                  <img src={img} alt={`${product.name} - view ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/5 lg:w-1/3 px-4 py-8 md:p-0">
            <div className="md:sticky md:top-24">
              {/* Reviews & Title */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2 underline cursor-pointer">{product.reviews} Reviews</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-lg font-medium text-gray-900">${product.price}</p>
              </div>

              {/* FOMO Alert */}
              {product.stock <= 5 && (
                <div className="flex items-center text-red-600 bg-red-50 p-3 mb-6 border border-red-100">
                  <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Limited Run. Only {product.stock} items left in stock.</span>
                </div>
              )}

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-900">Size</span>
                  <button className="text-xs text-gray-500 underline flex items-center">
                    <Info className="w-3 h-3 mr-1" /> Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-medium border transition-colors ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 text-gray-900 hover:border-gray-900 bg-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-xs text-red-500 mt-2 hidden" id="size-error">Please select a size.</p>
                )}
              </div>

              {/* Add to Cart (Desktop version & spacer for mobile) */}
              <div className="mb-8">
                <div className="flex space-x-3">
                  <button 
                    onClick={() => {
                        if(!selectedSize) {
                            document.getElementById('size-error')?.classList.remove('hidden');
                            return;
                        }
                        onAddToCart();
                    }}
                    className="flex-1 bg-black text-white py-4 font-medium text-sm hover:bg-gray-900 transition-colors hidden md:block"
                  >
                    Add to Cart
                  </button>
                  <button className="w-14 shrink-0 border border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Trust Signals */}
              <div className="bg-gray-50 border border-gray-100 p-4 space-y-3">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  <ShieldCheck className="w-5 h-5 mr-3 text-black" />
                  Secure Checkout
                </div>
                <div className="flex items-center text-sm font-medium text-gray-900">
                  <RefreshCw className="w-5 h-5 mr-3 text-black" />
                  30-Day Easy Returns
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Sell / You Might Also Like */}
        <div className="mt-20 px-4 md:px-0">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">Complete the Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onClick={() => {
                  window.scrollTo(0,0);
                  onProductClick(p);
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Add to Cart (Only visible on mobile, outside main flow) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 md:hidden pb-safe">
         <button 
            onClick={() => {
                if(!selectedSize) {
                    document.getElementById('size-error')?.classList.remove('hidden');
                    return;
                }
                onAddToCart();
            }}
            className="w-full bg-black text-white py-4 text-sm font-medium shadow-xl"
         >
            Add to Cart - ${product.price}
         </button>
      </div>
    </div>
  );
}
