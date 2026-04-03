import { ImageWithFallback } from './ImageWithFallback';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function TheVault() {
  const soldOutProducts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1760162692537-e8fd41367069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Midnight Royal Lehenga', date: 'Apr 2' },
    { id: 2, image: 'https://images.unsplash.com/photo-1760162693478-4c96b6c99d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Emerald Dream Saree', date: 'Apr 1' },
    { id: 3, image: 'https://images.unsplash.com/photo-1770748147858-a7c2eb8012ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Jade Heritage Set', date: 'Mar 31' },
    { id: 4, image: 'https://images.unsplash.com/photo-1753981031189-27bb7bd1c079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Forest Grace Saree', date: 'Mar 30' },
    { id: 5, image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Turquoise Majesty', date: 'Mar 29' },
    { id: 6, image: 'https://images.unsplash.com/photo-1760162692659-6f7b83dc763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Golden Dusk Drape', date: 'Mar 28' },
    { id: 7, image: 'https://images.unsplash.com/photo-1756483527259-8017fa38b947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Azure Dynasty', date: 'Mar 27' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-['Playfair_Display']">MISSED FOREVER</h2>
          <p className="text-muted-foreground">These exclusive pieces are gone. Don't let today's drop slip away.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {soldOutProducts.map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg aspect-[3/4] border border-gray-800">
              <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                <div className="bg-red-600 text-white px-6 py-3 rounded-lg rotate-[-12deg] font-['Playfair_Display'] font-bold text-lg border-4 border-white shadow-xl">SOLD OUT</div>
                <p className="text-white mt-4 text-sm">{product.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/archive" className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
            View Full Archive
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
