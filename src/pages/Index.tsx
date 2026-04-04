import { CountdownTimer } from '../components/storefront/CountdownTimer';
import { TrustBadges } from '../components/storefront/TrustBadges';
import { TheVault } from '../components/storefront/TheVault';
import { ProductGrid } from '../components/storefront/ProductGrid';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full text-center py-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>HANDCRAFTED ELEGANCE • LIMITED DROPS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Playfair_Display'] leading-tight text-foreground">
            12AM ETHNIC
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Premium ethnic wear crafted with precision. Each piece is a limited drop — once it's gone, it's gone.
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-['Playfair_Display'] text-foreground">Next Drop In</h2>
          <CountdownTimer className="justify-center text-6xl" />
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 font-['Playfair_Display'] text-foreground">Shop the Collection</h2>
          <ProductGrid />
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
    </>
  );
};

export default Index;
