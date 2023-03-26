import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

type Props = {
  admin?: boolean;
  isLogged?: boolean;
};

export default function AppLayout({
  children,
  isLogged = false,
}: PropsWithChildren<Props>) {
  return (
    <div className="tracking-wide">
      <Header isLogged={isLogged} />
      <main className="flex flex-col items-center justify-center py-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}
