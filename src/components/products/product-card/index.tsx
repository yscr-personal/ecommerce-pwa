import Rating from '@/components/rating';
import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { Product } from '../interfaces/product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Readonly<Props>) {
  const intl = useIntl();

  return (
    <div className="flex flex-col rounded-b-lg border bg-gray-50 shadow  transition duration-500 ease-in-out hover:scale-[1.03]">
      <Link href={`/products/${product.id}`}>
        <Image
          className="h-80 w-80 transform object-cover"
          src={product.images[0]}
          alt={product.title}
          width={320}
          height={320}
        />
      </Link>
      <div className="flex flex-col justify-between p-2">
        <Link
          href={`/products/${product.id}`}
          className="text-gray-700 hover:text-purple-500"
        >
          {product.title}
        </Link>

        <div className="flex items-center justify-between">
          <Link href={`/products/${product.id}`}>
            <span className="text-gray-700">
              {intl.formatNumber(product.price, {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          </Link>
          <Rating
            mean={product.mean_rating}
            total={product.avaliations.length}
          />
        </div>
      </div>
    </div>
  );
}
