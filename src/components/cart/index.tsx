import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
  const [products, setProducts] = useState(0);

  return (
    <Link
      href="/cart"
      onClick={() => setProducts((v) => v + 1)}
      className="relative"
    >
      <FaShoppingCart size={35} />
      <span
        className={`absolute left-0 bottom-0 flex ${
          products > 9 ? 'h-5' : 'h-4'
        } ${
          products > 9 ? 'w-5' : 'w-4'
        } items-center justify-center rounded-full bg-red-500 text-xs text-white`}
      >
        {products}
      </span>
    </Link>
  );
}
