import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { CartDrawer } from './CartDrawer';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: "Today's Drop" },
    { path: '/archive', label: 'Archive' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-['Playfair_Display']">12</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-['Playfair_Display'] text-primary">12AM ETHNIC</h1>
              <p className="text-xs text-muted-foreground">Daily Drop at Midnight</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm transition-colors relative ${isActive(link.path) ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}>
                {link.label}
                {isActive(link.path) && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></div>}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <CartDrawer />
            <Link to="/account" className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
              <User className="w-5 h-5 text-muted-foreground" />
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6 text-muted-foreground" /> : <Menu className="w-6 h-6 text-muted-foreground" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg transition-colors ${isActive(link.path) ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-muted/50'}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
