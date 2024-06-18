import { useAppSelector } from "@/store";
import CartItem from "../cart-item";
import { selectCartProducts } from "../slice/cart-selectors";


export default function CartItemsList() {
  const products = useAppSelector(selectCartProducts);

  return (
    <div className="flex flex-col space-y-5">
      {products.map((product) => (
        <CartItem key={product.id} cartProduct={product} />
      ))}
    </div>
  );
}