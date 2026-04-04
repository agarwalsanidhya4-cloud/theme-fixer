import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { ProductCard } from './ProductCard';
import { Loader2, PackageX } from 'lucide-react';

export function ProductGrid() {
  const { data: products, isLoading, error } = useShopifyProducts(20);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive">Failed to load products. Please try again later.</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <PackageX className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground font-['Playfair_Display'] mb-2">No products found</h3>
        <p className="text-muted-foreground">Products will appear here once they're added to the store.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </div>
  );
}
