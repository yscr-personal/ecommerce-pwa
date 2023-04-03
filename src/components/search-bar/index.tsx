import Select from '@/components/select';
import { useAppDispatch, useAppSelector } from '@/store';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { selectCategories } from '../categories/slice/categories-selectors';
import { useDebounce } from '../hooks/use-debounce';
import { fetchProductsAction } from '../products/slice/actions/fetch-products';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  function filterProducts() {
    dispatch(
      fetchProductsAction({
        title: debouncedSearch,
        categoryId: selectedCategory,
      }),
    );
  }

  return (
    <div className="flex flex-row text-sm text-gray-700">
      <Select
        className="h-10 max-w-sm cursor-pointer rounded-l-md border-r-2 bg-gray-100 p-2 outline-none"
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
        className="h-10 w-full appearance-none rounded-none bg-white px-3 outline-none"
        type="search"
        name="search-products"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            filterProducts();
          }
        }}
      />
      <button
        className="h-10 rounded-r-md bg-purple-400 p-3 hover:bg-purple-500"
        onClick={() => filterProducts()}
      >
        <FaSearch size={18} />
      </button>
    </div>
  );
}
