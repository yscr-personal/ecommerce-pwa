import { selectUserToken } from '@/components/user/slice/user-selectors';
import { useAppSelector } from '@/store';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  const userToken = useAppSelector(selectUserToken);

  return (
    <div className="tracking-wide">
      <Header isLogged={!!userToken} />
      <main className="flex flex-col items-center justify-center py-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}
