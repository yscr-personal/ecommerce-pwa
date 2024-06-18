import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="tracking-wide">
      <Header />
      <main className="flex min-h-[calc(100vh-100px)]">{children}</main>
      <Footer />
    </div>
  );
}
