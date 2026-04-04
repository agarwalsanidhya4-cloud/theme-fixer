import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from '@/lib/shopify';

export function useShopifyProducts(first = 20, query?: string) {
  return useQuery<ShopifyProduct[]>({
    queryKey: ['shopify-products', first, query],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first, query });
      return data?.data?.products?.edges ?? [];
    },
  });
}
