import { Product } from '@/components/products/interfaces/product';
import { logger } from '@/utils/logger';
import { Request, Response } from 'express';
import { onError, onSuccess, RequestError } from '../handler';
import platziApi from '../requests/clients/platzi-fake-store-api';
import { generateRandomAvaliations } from './generate-random-avaliations';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const q = Object.entries(req.query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const products = await platziApi(req, `api/v1/products?${q}`);

    const filteredData = products
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

    return onSuccess(res, filteredData);
  } catch (err: unknown) {
    return onError(
      req,
      res,
      err as RequestError,
      `[getProducts] Failed to fetch products`,
    );
  }
};
