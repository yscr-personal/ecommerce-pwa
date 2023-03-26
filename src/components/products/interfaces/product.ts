import { Category } from '@/components/categories/interfaces/category';
import { Avaliation } from './avaliation';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  categories: Category[];
  avaliations: Avaliation[];
  mean_rating: number;
};
