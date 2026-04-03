import { CountdownTimer } from '../components/storefront/CountdownTimer';
import { ProgressBar } from '../components/storefront/ProgressBar';
import { TrustBadges } from '../components/storefront/TrustBadges';
import { TheVault } from '../components/storefront/TheVault';
import { ImageWithFallback } from '../components/storefront/ImageWithFallback';
import { ChevronDown, Sparkles, Package } from 'lucide-react';

const product = {
  name: 'Royal Peacock Silk Lehenga',
  tagline: 'Handwoven Heritage • Limited Edition',
  price: '₹24,999',
  originalPrice: '₹34,999',
  fabricLeft: 15,
  totalFabric: 50,
  image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  description: 'An exquisite turquoise and gold lehenga set featuring intricate zardozi work and hand-embroidered peacock motifs. This masterpiece takes 240+ hours of skilled craftsmanship.',
  details: {
    fabric: 'Pure Banarasi Silk with Gold Zari',
    work: 'Hand Embroidery, Zardozi, Stone Work',
    occasion: 'Weddings, Grand Celebrations',
    delivery: '10-12 Days (Made-to-Order)',
  },
};

const Index = () => {
  return (
    <>
      <section className="pt-20 md:pt-24 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm z-10">TODAY'S DROP</div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-xs z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Exclusive</span>
                  </div>
                  <ImageWithFallback src={product.image} alt={product.name} className="w-full h-[500px] md:h-[700px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:pt-8">
              <div>
                <p className="text-primary text-sm font-semibold mb-2 tracking-wider">{product.tagline}</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display'] leading-tight">{product.name}</h2>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-primary font-['Playfair_Display']">{product.price}</span>
                <span className="text-2xl text-gray-500 line-through">{product.originalPrice}</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">SAVE 29%</span>
              </div>

              <div className="bg-black/40 border-2 border-primary/40 rounded-xl p-6">
                <p className="text-center text-sm text-gray-300 mb-4">This Drop Vanishes In:</p>
                <CountdownTimer className="justify-center" />
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <ProgressBar current={product.fabricLeft} total={product.totalFabric} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <p className="text-xs text-muted-foreground mb-1 uppercase">{key}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <button className="hidden md:flex w-full bg-primary hover:bg-[hsl(var(--gold-light))] text-primary-foreground font-bold py-5 rounded-xl text-lg transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/50 items-center justify-center gap-3">
                <Package className="w-6 h-6" />
                SECURE YOUR PIECE NOW
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-bounce pt-4">
                <span>Scroll to see past drops</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      <TheVault />
    </>
  );
};

export default Index;
