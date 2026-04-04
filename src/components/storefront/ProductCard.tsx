import { Link } from 'react-router-dom';
import { ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { Loader2, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const node = product.node;
  const firstImage = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant) return;
    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });
    toast.success(`${node.title} added to cart`, { position: 'top-center' });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-[3/4]">
        {firstImage ? (
          <ImageWithFallback
            src={firstImage.url}
            alt={firstImage.altText || node.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          onClick={handleAddToCart}
          disabled={isLoading || !firstVariant?.availableForSale}
          className="absolute bottom-4 right-4 bg-primary hover:bg-primary/80 text-primary-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors font-['Playfair_Display']">{node.title}</h3>
        <p className="text-primary font-bold">{price.currencyCode} {parseFloat(price.amount).toFixed(2)}</p>
      </div>
    </Link>
  );
}
