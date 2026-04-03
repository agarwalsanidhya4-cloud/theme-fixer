import { Outlet } from 'react-router-dom';
import { Header } from '../components/storefront/Header';
import { Footer } from '../components/storefront/Footer';
import { StickyBuyButton } from '../components/storefront/StickyBuyButton';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBuyButton />
    </div>
  );
}
