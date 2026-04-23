import { useGetCart } from "./useGetCart";

export const useGetCartCount = () => {
  const { data: cart } = useGetCart();
  const cartItemsCount = cart?.items?.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0
  ) || 0;
  return cartItemsCount;
};