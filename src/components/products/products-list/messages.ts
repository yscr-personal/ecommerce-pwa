import { defineMessages } from 'react-intl';

export default defineMessages({
  total_products: {
    id: 'components.products.products-list.total-products',
    defaultMessage: '{initPageIndex}-{endPageIndex} de {total} resultados',
  },
  sort_by_price_asc: {
    id: 'components.products.products-list.sort_by_price_asc',
    defaultMessage: 'Menor preço',
  },
  sort_by_price_desc: {
    id: 'components.products.products-list.sort_by_price_desc',
    defaultMessage: 'Maior preço',
  },
  sort_by_rating: {
    id: 'components.products.products-list.sort_by_rating',
    defaultMessage: 'Média de avaliações',
  },
  sort_by_name: {
    id: 'components.products.products-list.sort_by_name',
    defaultMessage: 'Nome',
  },
  sort_by: {
    id: 'components.products.products-list.sort_by',
    defaultMessage: 'Ordenar por',
  },
});
