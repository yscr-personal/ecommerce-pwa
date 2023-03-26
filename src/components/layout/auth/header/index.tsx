import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col bg-gray-800 p-2 text-white">
      <div className="flex h-16 flex-row items-center justify-between">
        <Link href="/">
          <Image
            priority
            className="cursor-pointer p-1 hover:border"
            src="/images/logo.png"
            alt="My Site Logo"
            width={64}
            height={64}
          />
        </Link>
      </div>
    </header>
  );
}
