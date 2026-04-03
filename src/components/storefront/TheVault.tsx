import { ImageWithFallback } from './ImageWithFallback';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function TheVault() {
  const archiveProducts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1760162692537-e8fd41367069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Midnight Royal Lehenga' },
    { id: 2, image: 'https://images.unsplash.com/photo-1760162693478-4c96b6c99d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Emerald Dream Saree' },
    { id: 3, image: 'https://images.unsplash.com/photo-1770748147858-a7c2eb8012ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Jade Heritage Set' },
    { id: 4, image: 'https://images.unsplash.com/photo-1753981031189-27bb7bd1c079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Forest Grace Saree' },
    { id: 5, image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Turquoise Majesty' },
    { id: 6, image: 'https://images.unsplash.com/photo-1760162692659-6f7b83dc763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Golden Dusk Drape' },
    { id: 7, image: 'https://images.unsplash.com/photo-1756483527259-8017fa38b947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Azure Dynasty' },
    { id: 8, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Silk Elegance Kurti' },
    { id: 9, image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Heritage Collection' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-['Playfair_Display'] text-foreground">THE ARCHIVE</h2>
          <p className="text-muted-foreground">Past designs that found their forever homes</p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {archiveProducts.slice(0, 9).map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-lg aspect-square border border-border/50">
              <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover grayscale opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-primary font-['Playfair_Display'] font-bold text-lg tracking-wider opacity-80 rotate-[-15deg] border border-primary/30 px-4 py-2 rounded">
                  SOLD OUT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
