import { selectProductById } from '@/components/products/slice/products-selectors';
import Select from '@/components/select';
import { useAppDispatch, useAppSelector } from '@/store';
import Image from 'next/image';
import Link from "next/link";
import { useIntl } from "react-intl";
import { CartProduct } from '../interfaces/cart-product';
import { updateProductQuantity } from '../slice/cart-slice';

type Props = {
  cartProduct: CartProduct;
}


export default function CartItem({ cartProduct }: Readonly<Props>) {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const productReference = useAppSelector((state) => selectProductById(state, cartProduct.id));

  if (!productReference) {
    return null;
  }

  return (
    <div className="flex flex-row justify-start items-start">
      <Link href={`/products/${productReference.id}`}>
        <Image
          className="h-60 w-60 transform object-cover"
          src={productReference.images[0]}
          alt={productReference.title}
          width={240}
          height={240}
        />
      </Link>
      <div className="flex flex-row justify-between ml-5 flex-1">
        <div className='flex flex-col items-start'>
          <Link
            href={`/products/${productReference.id}`}
            className="text-gray-700 text-lg"
          >
            {productReference.title}
          </Link>

          <Select
            className="cursor-pointer rounded-lg border bg-gray-100 p-1 outline-none"
            label='Qtd'
            value={`${cartProduct.quantity}`}
            onChange={(newValue) => dispatch(updateProductQuantity({
              id: cartProduct.id,
              quantity: Number(newValue),
            }))}
            options={Array.from({ length: 10 }, (_, i) => ({
              label: `${i + 1}`,
              value: `${i + 1}`,
            }))}
          />
        </div>

        <div className="flex flex-col items-end">
          <span className="text-gray-700 font-bold">
            {intl.formatNumber(productReference.price, {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </div>
      </div>
    </div>
  )
}