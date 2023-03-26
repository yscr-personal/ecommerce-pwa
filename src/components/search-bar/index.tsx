import Select from '@/components/select';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useCategories } from '../categories/request';
import { useDebounce } from '../hooks/use-debounce';
import { useFilter } from '../hooks/use-filter';
import { Product } from '../products/interfaces/product';
import { PRODUCTS_QUERY_KEY } from '../products/request';
import bffRequest from '../requests/bff-request';

export default function SearchBar() {
  const { data: categories } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { mutate } = useFilter<Product>({
    mutateFn: () =>
      bffRequest(
        `products?${new URLSearchParams({
          title: debouncedSearch,
          categoryId: selectedCategory,
        }).toString()}`,
      ),
    queryKey: PRODUCTS_QUERY_KEY,
  });

  return (
    <div className="flex flex-row text-sm text-gray-700">
      <Select
        className="h-10 cursor-pointer rounded-l-md border-r-2 bg-gray-100 p-2 outline-none max-w-sm"
        options={
          categories?.map((category) => ({
            label: category.name,
            value: String(category.id),
          })) ?? []
        }
        extraOptions={[
          {
            label: 'Todos',
            value: '',
          },
        ]}
        value={selectedCategory}
        onChange={setSelectedCategory}
      />
      <input
        className="h-10 w-full appearance-none bg-white px-3 outline-none rounded-none"
        type="search"
        name="search-products"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            mutate();
          }
        }}
      />
      <button
        className="h-10 rounded-r-md bg-purple-400 p-3 hover:bg-purple-500"
        onClick={() => mutate()}
      >
        <FaSearch size={18} />
      </button>
    </div>
  );
}
