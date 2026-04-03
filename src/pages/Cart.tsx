import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12 min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-['Playfair_Display']">Shopping Cart</h1>
          <p className="text-muted-foreground">Your cart is empty</p>
        </div>
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">Check out today's exclusive drop and add it to your cart before it's gone.</p>
          <Link to="/" className="inline-block bg-primary hover:bg-[hsl(var(--gold-light))] text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">View Today's Drop</Link>
        </div>
      </div>
    </div>
  );
}
