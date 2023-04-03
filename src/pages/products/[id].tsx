import Carousel from '@/components/carousel';
import { addProduct } from '@/components/cart/slice/cart-slice';
import useLazyLoad from '@/components/hooks/use-lazy-load';
import AppLayout from '@/components/layout/app';
import { selectProductById } from '@/components/products/slice/products-selectors';
import Rating from '@/components/rating';
import { useAppDispatch, useAppSelector } from '@/store';
import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';

export default function ProductDetail() {
  const router = useRouter();
  const intl = useIntl();
  const dispatch = useAppDispatch();

  const { id } = router.query;

  const product = useAppSelector((state) =>
    selectProductById(state, Number(id)),
  );

  const { lazyData, setCurrentPage, hasMore } = useLazyLoad({
    data: product?.avaliations ?? [],
    perPage: 5,
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  const ratingStats = product.avaliations.reduce((acc, curr) => {
    const integer = Math.floor(curr.rating);
    return {
      ...acc,
      [integer]: acc[integer] ? acc[integer] + 1 : 1,
    };
  }, {} as Record<number, number>);

  return (
    <AppLayout>
      <div className="flex flex-col px-3">
        <h1 className="text-2xl font-bold">{product.title}</h1>

        <Rating mean={product.mean_rating} total={product.avaliations.length} />

        <Carousel data={product.images} />

        <span className="self-start text-2xl font-bold text-gray-700">
          {intl.formatNumber(product.price, {
            style: 'currency',
            currency: 'USD',
          })}
        </span>

        <button
          className="mt-2 h-10 w-full self-start rounded-md bg-purple-600 text-white"
          onClick={() => {
            router.push(`/products/${product.id}/checkout`);
          }}
        >
          Buy
        </button>

        <button
          className="mt-2 h-10 w-full self-start rounded-md bg-indigo-600 text-white"
          onClick={() => {
            dispatch(
              addProduct({
                id: product.id,
                price: product.price,
                quantity: 1,
              }),
            );
            toast.success('Product added to cart', {
              position: 'bottom-right',
              autoClose: 3000,
              icon: () => <FaShoppingCart />,
            });
          }}
        >
          Add to cart
        </button>

        <hr className="my-3" />
        <div className="space-y-3">
          <section className="flex flex-col">
            <h2 className="text-lg text-neutral-500">Description</h2>
            <p className="text-ellipsis text-gray-700">{product.description}</p>
          </section>

          <hr className="my-3" />
          <section className="flex flex-col">
            <h2 className="text-lg text-neutral-500">Reviews</h2>

            <div className="flex flex-col space-y-1">
              {Object.entries(ratingStats).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-row items-center justify-between space-x-2"
                >
                  <span className="w-[15%] place-content-start">
                    {key.charAt(0)} stars
                  </span>

                  <div className="h-3 w-[70%] rounded-lg bg-gray-200">
                    <div
                      className="h-3 w-full rounded-lg bg-purple-600"
                      style={{
                        width: `${(value / product.avaliations.length) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="flex w-[10%] place-content-end">
                    {((value / product.avaliations.length) * 100).toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-2">
              {lazyData.map((avaliation) => (
                <div key={avaliation.id}>
                  <div className="flex flex-row space-x-4 p-2">
                    <Rating mean={avaliation.rating} />
                    <p className="text-justify text-gray-700">
                      {avaliation.comment}
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
              {hasMore && (
                <button
                  className="self-center rounded-md border border-gray-300 p-3"
                  onClick={() => setCurrentPage((v) => v + 1)}
                >
                  Ver mais
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
