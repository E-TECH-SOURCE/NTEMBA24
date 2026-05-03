import { Menu, Search, ShoppingBag } from 'lucide-react';

export function Navbar({ cartCount, onLogoClick }: { cartCount: number; onLogoClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-900 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Links (Left) */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-sm text-gray-900 hover:text-gray-600 transition-colors">New Arrivals</a>
            <a href="#" className="font-medium text-sm text-gray-500 hover:text-gray-900 transition-colors">Collections</a>
            <a href="#" className="font-medium text-sm text-gray-500 hover:text-gray-900 transition-colors">Best Sellers</a>
            <a href="#" className="font-medium text-sm text-red-600 hover:text-red-700 transition-colors">Sale</a>
          </div>

          {/* Logo (Center) */}
          <div className="flex-shrink-0 flex items-center justify-center cursor-pointer" onClick={onLogoClick}>
            <span className="font-serif font-bold text-2xl tracking-tighter uppercase text-black">NTEMBA24</span>
          </div>

          {/* Icons (Right) */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-gray-900 hover:text-gray-600 transition-colors hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-900 hover:text-gray-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
