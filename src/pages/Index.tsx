import { CountdownTimer } from '../components/storefront/CountdownTimer';
import { ProgressBar } from '../components/storefront/ProgressBar';
import { TrustBadges } from '../components/storefront/TrustBadges';
import { TheVault } from '../components/storefront/TheVault';
import { ImageWithFallback } from '../components/storefront/ImageWithFallback';
import { ChevronDown, Sparkles, Package } from 'lucide-react';
import { useEffect, useState } from 'react';

const product = {
  name: 'Midnight Silk Kurti',
  tagline: 'Handcrafted Elegance • Limited Drop',
  price: '₹8,999',
  originalPrice: '₹12,999',
  fabricLeft: 12,
  totalFabric: 50,
  image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  description: 'A stunning midnight blue silk kurti featuring intricate gold embroidery and premium fabric texture. Crafted with precision in Surat, this piece embodies timeless elegance.',
  details: {
    fabric: 'Pure Silk with Gold Thread',
    work: 'Hand Embroidery, Mirror Work',
    occasion: 'Festivals, Special Occasions',
    delivery: '7-10 Days (Made-to-Order)',
  },
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold mb-4 tracking-wider uppercase">{product.tagline}</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-['Playfair_Display'] leading-tight text-foreground">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
              {product.description}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/20"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
              <ImageWithFallback 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[600px] md:h-[800px] object-cover transition-transform duration-100" 
                style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full font-bold text-sm">
                TODAY'S DROP
              </div>
              <div className="absolute top-6 right-6 bg-secondary/70 backdrop-blur-sm px-6 py-3 rounded-full text-sm flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>LIMITED</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-baseline gap-6 mb-8">
              <span className="text-5xl font-bold text-primary font-['Playfair_Display']">{product.price}</span>
              <span className="text-2xl text-muted-foreground line-through">{product.originalPrice}</span>
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">SAVE 31%</span>
            </div>

            <button className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-12 rounded-full text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 inline-flex items-center gap-3">
              <Package className="w-6 h-6" />
              SECURE YOUR PIECE
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-['Playfair_Display'] text-foreground">Drop Vanishes In</h2>
          <CountdownTimer className="justify-center text-6xl" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* The Vault */}
      <TheVault />

      {/* Sticky Buy Button for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 z-50">
        <button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 rounded-full text-lg transition-all hover:scale-105 flex items-center justify-center gap-3">
          <Package className="w-6 h-6" />
          SECURE YOUR PIECE
        </button>
      </div>
    </>
  );
};

export default Index;
