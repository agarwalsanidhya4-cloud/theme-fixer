import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { useState } from 'react';
import { Loader2, ShoppingCart, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/components/storefront/ImageWithFallback';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
      if (!data?.data?.product) return null;
      return { node: data.data.product } as ShopifyProduct;
    },
    enabled: !!handle,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-20 px-6">
        <h2 className="text-2xl font-bold text-foreground font-['Playfair_Display'] mb-2">Product not found</h2>
        <Link to="/" className="text-primary hover:underline">Back to store</Link>
      </div>
    );
  }

  const node = product.node;
  const images = node.images.edges;
  const variants = node.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success(`${node.title} added to cart`, { position: 'top-center' });
  };

  return (
    <div className="px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border aspect-square">
              {images[selectedImageIndex] ? (
                <ImageWithFallback
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || node.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <span className="text-muted-foreground">No image</span>
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-colors ${i === selectedImageIndex ? 'border-primary' : 'border-border'}`}
                  >
                    <img src={img.node.url} alt={img.node.altText || ''} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-['Playfair_Display']">{node.title}</h1>
            <p className="text-3xl font-bold text-primary">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">{node.description}</p>

            {/* Options */}
            {node.options.map((option) => (
              <div key={option.name} className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wider">{option.name}</label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => {
                    const variantIndex = variants.findIndex(v =>
                      v.node.selectedOptions.some(o => o.name === option.name && o.value === value)
                    );
                    const isSelected = variants[selectedVariantIndex]?.node.selectedOptions.some(
                      o => o.name === option.name && o.value === value
                    );
                    return (
                      <button
                        key={value}
                        onClick={() => variantIndex >= 0 && setSelectedVariantIndex(variantIndex)}
                        className={`px-4 py-2 rounded-full border text-sm transition-all ${isSelected ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-foreground'}`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <button
              onClick={handleAddToCart}
              disabled={isCartLoading || !selectedVariant?.availableForSale}
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCartLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : !selectedVariant?.availableForSale ? (
                'Sold Out'
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
