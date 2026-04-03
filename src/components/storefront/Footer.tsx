import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-['Playfair_Display']">12</span>
              </div>
              <span className="font-bold font-['Playfair_Display'] text-primary">12AM ETHNIC</span>
            </div>
            <p className="text-muted-foreground text-sm">Handcrafted ethnic wear. One exclusive piece, every midnight.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Today's Drop</Link>
              <Link to="/archive" className="text-muted-foreground hover:text-primary text-sm transition-colors">Archive</Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-primary text-sm transition-colors">How It Works</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <div className="flex flex-col gap-2">
              <Link to="/account" className="text-muted-foreground hover:text-primary text-sm transition-colors">My Account</Link>
              <Link to="/cart" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cart</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2026 12AM ETHNIC. Every piece is handcrafted with love in Surat.</p>
          <p className="text-muted-foreground/60 text-xs mt-2">New drop every midnight. Set your alarm.</p>
        </div>
      </div>
    </footer>
  );
}
