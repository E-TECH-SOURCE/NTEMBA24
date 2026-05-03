import { Product } from '../data';

export function ProductCard({ product, onClick, key }: { product: Product; onClick: () => void; key?: string | number }) {
  return (
    <div className="group cursor-pointer flex flex-col" onClick={onClick}>
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider z-10">
            New
          </div>
        )}
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Secondary image on hover (if exists) */}
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          />
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm text-gray-900 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        </div>
        <span className="font-medium text-sm text-gray-900">${product.price}</span>
      </div>
    </div>
  );
}
