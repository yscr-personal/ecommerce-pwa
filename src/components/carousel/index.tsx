import Image from 'next/image';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import useResponsive from '../hooks/use-responsive';

type Props = {
  data: string[];
};

export default function Carousel({ data }: Readonly<Props>) {
  const size = useResponsive();

  return (
    <ResponsiveCarousel
      className="p-4"
      showThumbs={size !== 'sm'}
      showStatus={false}
      infiniteLoop
      renderThumbs={() =>
        data.map((img) => (
          <div key={img} className="relative h-20 w-full object-cover">
            <Image src={img} fill alt="logo" />
          </div>
        ))
      }
    >
      {data?.map((img, idx) => (
        <Image
          className="h-96 w-full object-contain"
          key={img}
          src={img}
          alt={`Product Image ${idx + 1}`}
          width={380}
          height={380}
          priority={idx === 0}
        />
      ))}
    </ResponsiveCarousel>
  );
}
