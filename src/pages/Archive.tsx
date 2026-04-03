import { useState } from 'react';
import { ImageWithFallback } from '../components/storefront/ImageWithFallback';
import { Search } from 'lucide-react';

const archivedProducts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1760162692537-e8fd41367069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Midnight Royal Lehenga', date: 'Apr 2, 2026', price: '₹28,999', month: 'April' },
  { id: 2, image: 'https://images.unsplash.com/photo-1760162693478-4c96b6c99d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Emerald Dream Saree', date: 'Apr 1, 2026', price: '₹22,999', month: 'April' },
  { id: 3, image: 'https://images.unsplash.com/photo-1770748147858-a7c2eb8012ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Jade Heritage Set', date: 'Mar 31, 2026', price: '₹26,999', month: 'March' },
  { id: 4, image: 'https://images.unsplash.com/photo-1753981031189-27bb7bd1c079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Forest Grace Saree', date: 'Mar 30, 2026', price: '₹24,999', month: 'March' },
  { id: 5, image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Turquoise Majesty', date: 'Mar 29, 2026', price: '₹25,999', month: 'March' },
  { id: 6, image: 'https://images.unsplash.com/photo-1760162692659-6f7b83dc763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Golden Dusk Drape', date: 'Mar 28, 2026', price: '₹23,999', month: 'March' },
  { id: 7, image: 'https://images.unsplash.com/photo-1756483527259-8017fa38b947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Azure Dynasty', date: 'Mar 27, 2026', price: '₹27,999', month: 'March' },
  { id: 8, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', name: 'Crimson Elegance', date: 'Mar 26, 2026', price: '₹29,999', month: 'March' },
];

export default function Archive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const filteredProducts = archivedProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMonth = selectedMonth === 'all' || p.month === selectedMonth;
    return matchesSearch && matchesMonth;
  });

  const months = ['all', 'April', 'March'];

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display']">The Archive</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Browse our collection of past drops. Each piece tells a story of craftsmanship and exclusivity.</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="Search by name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-foreground placeholder-gray-400 focus:border-primary focus:outline-none" />
          </div>
          <div className="flex gap-2">
            {months.map((month) => (
              <button key={month} onClick={() => setSelectedMonth(month)} className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${selectedMonth === month ? 'bg-primary text-primary-foreground' : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-primary/50'}`}>
                {month === 'all' ? 'All' : month}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-primary/50 transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">SOLD OUT</div>
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-sm font-bold font-['Playfair_Display']">{product.price}</span>
                  <span className="text-gray-400 text-xs">{product.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
