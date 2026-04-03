import { User, Package, Heart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12 min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">My Account</h1>
          <p className="text-gray-300 text-lg">Manage your orders, wishlist, and account settings.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2 font-['Playfair_Display']">Welcome Back</h2>
            <p className="text-muted-foreground mb-6">Sign in to access your account and order history.</p>
            <button className="bg-primary hover:bg-[hsl(var(--gold-light))] text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">Sign In</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Package, title: 'My Orders', desc: 'Track your orders' },
              { icon: Heart, title: 'Wishlist', desc: 'Saved pieces' },
              { icon: Settings, title: 'Settings', desc: 'Account preferences' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all cursor-pointer">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
