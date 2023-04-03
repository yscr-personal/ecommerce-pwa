import { Product } from '@/components/products/interfaces/product';
import { generateRandomAvaliations } from './generate-random-avaliations';

export function transformData(products: any[]) {
  return products
    .map((product: any) => ({
      ...product,
      categories: [product.category],
      category: undefined,
      images: product.images.filter(
        (image: string) =>
          !image.includes('placeimg') &&
          ['https', 'http'].includes(image.split(':')[0]),
      ),
      avaliations: generateRandomAvaliations(),
    }))
    .filter((product: Product) => product.images.length > 0)
    .map((product: Product) => {
      const totalAvaliations = product.avaliations.length;
      const totalStars = product.avaliations.reduce(
        (acc, avaliation) => acc + avaliation.rating,
        0,
      );
      return {
        ...product,
        mean_rating: totalStars / totalAvaliations,
      };
    });
}
