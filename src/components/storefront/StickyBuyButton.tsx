import { useLocation } from 'react-router-dom';
import { Package } from 'lucide-react';

export function StickyBuyButton() {
  const location = useLocation();
  if (location.pathname !== '/') return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/98 backdrop-blur-md border-t-2 border-primary/50 p-4 z-50 shadow-2xl">
      <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
        <Package className="w-5 h-5" />
        SECURE YOUR PIECE
      </button>
    </div>
  );
}
