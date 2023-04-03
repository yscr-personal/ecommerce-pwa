import { useAppSelector } from '@/store';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { selectCartProducts } from './slice/cart-selectors';

const CIRCLE_SIZE_MAP = ['h-4 w-4', 'h-5 w-5', 'h-6 w-6', 'h-7 w-7'];

export default function CartIcon() {
  const productsInCart = useAppSelector(selectCartProducts).length;

  const circleSize = CIRCLE_SIZE_MAP[productsInCart.toString().length];

  return (
    <Link href="/cart" className="relative">
      <FaShoppingCart size={35} />
      <span
        className={`absolute left-0 bottom-0 flex ${circleSize} items-center justify-center rounded-full bg-red-500 text-xs text-white`}
      >
        {productsInCart}
      </span>
    </Link>
  );
}
