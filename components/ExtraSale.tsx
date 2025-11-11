import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const saleProducts = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    originalPrice: 1999,
    salePrice: 1299,
    discount: 35,
    image: 'https://images.unsplash.com/photo-1643691291828-648e708e16c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZ1cmJpc2hlZCUyMGxhcHRvcCUyMGNvbXB1dGVyfGVufDF8fHx8MTc2MjQ2MDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excellent',
    stock: 3,
  },
  {
    id: 2,
    name: 'iPhone 14 Pro',
    originalPrice: 1099,
    salePrice: 749,
    discount: 32,
    image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzYyNDU3NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Like New',
    stock: 5,
  },
  {
    id: 3,
    name: 'AirPods Max',
    originalPrice: 549,
    salePrice: 379,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYyNTI4ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Excellent',
    stock: 2,
  },
  {
    id: 4,
    name: 'iPad Air',
    originalPrice: 749,
    salePrice: 499,
    discount: 33,
    image: 'https://images.unsplash.com/photo-1760708369071-e8a50a8979cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYyNTU3OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    condition: 'Like New',
    stock: 4,
  },
];

export function ExtraSale() {
  return (
    <div className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Limited Time</p>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">ExtraSale</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save up to 35% on select refurbished products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="relative mb-4 bg-[#FBFBFD] rounded-2xl overflow-hidden aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.stock <= 3 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                      Only {product.stock} left
                    </span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">{product.condition}</p>
                <h3 className="text-xl mb-2 tracking-tight">{product.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl tracking-tight">${product.salePrice}</span>
                  <span className="text-sm line-through text-gray-400">
                    ${product.originalPrice}
                  </span>
                </div>
                <Button className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full">
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
