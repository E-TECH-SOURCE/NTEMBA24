export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800 pb-28 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand & Newsletter */}
          <div className="md:col-span-2">
            <span className="font-serif font-bold text-2xl tracking-tighter uppercase mb-4 block">NTEMBA24</span>
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              Premium streetwear crafted for the modern individual. Subscribe to receive early access to latest drops and exclusive events.
            </p>
            <form className="flex border-b border-gray-600 focus-within:border-white transition-colors max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none py-2 px-0 w-full text-sm text-white placeholder-gray-500"
              />
              <button type="submit" className="text-xs font-bold uppercase tracking-wider pl-4 hover:text-gray-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NTEMBA24. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
