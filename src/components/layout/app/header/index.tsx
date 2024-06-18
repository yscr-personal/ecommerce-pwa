import CartIcon from '@/components/cart/cart-icon';
import { fetchCategoriesAction } from '@/components/categories/slice/actions/fetch-categories';
import ProfileMenuIcon from '@/components/profile/profile-menu-icon';
import SearchBar from '@/components/search-bar';
import { useAppDispatch } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';

type Props = {
  isLogged: boolean;
};

export default function Header({ isLogged }: Readonly<Props>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  return (
    <header className="flex flex-col bg-gray-800 p-2 text-white">
      <div className="flex h-16 flex-row items-center justify-between">
        <Image
          onClick={Router.reload}
          priority
          className="cursor-pointer p-1 hover:border"
          src="/images/logo.png"
          alt="My Site Logo"
          width={64}
          height={64}
        />
        <div className="hidden w-1/3 lg:block">
          <SearchBar />
        </div>
        <div className="flex flex-row items-center justify-between space-x-5">
          {isLogged && <ProfileMenuIcon />}
          <CartIcon />
          <Link
            href={isLogged ? '/auth/logout' : '/auth/login'}
            className={`rounded ${
              isLogged ? 'bg-red-500' : 'bg-purple-500'
            } py-2 px-4 font-bold text-white ${
              isLogged ? 'hover:bg-red-700' : 'hover:bg-purple-700'
            }`}
          >
            {isLogged ? 'Logout' : 'Login'}
          </Link>
        </div>
      </div>
      <div className="w-full max-w-lg self-center py-4 lg:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
