// src/components/ui/BrandsLogo.tsx
import React from 'react';

export type Brand = { src: string; alt: string };

type Props = {
  brands: Brand[];
  mobileCount?: number;
  desktopCount?: number;
  heightClass?: string; // default "h-6 md:h-8 lg:h-9"
  gapClass?: string; // default "gap-10 md:gap-14 lg:gap-16"
  grayscale?: boolean; // default true
  // Durasi animasi: pilih salah satu kelas statis agar tak “hilang” saat build
  speedClass?: string; // default "[animation:marquee_28s_linear_infinite]"
};

function Track({
  items,
  heightClass,
  gapClass,
  grayscale,
  speedClass,
}: {
  items: Brand[];
  heightClass: string;
  gapClass: string;
  grayscale: boolean;
  speedClass: string;
}) {
  return (
    <ul
      className={[
        'relative flex items-center whitespace-nowrap',
        gapClass,
        speedClass, // ex: [animation:marquee_28s_linear_infinite]
        'motion-reduce:[animation:none]', // hormati prefers-reduced-motion
      ].join(' ')}
    >
      {items.map((b, i) => (
        <li key={`${b.alt}-${i}`} className='shrink-0'>
          <img
            src={b.src}
            alt={`${b.alt} logo`}
            loading='lazy'
            draggable='false'
            className={[
              heightClass,
              'object-contain select-none pointer-events-none',
              grayscale
                ? 'grayscale opacity-70 hover:opacity-100 hover:grayscale-0'
                : '',
              'dark:opacity-80',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </li>
      ))}
    </ul>
  );
}

const BrandsLogo: React.FC<Props> = ({
  brands,
  mobileCount = 4,
  desktopCount = 7,
  heightClass = 'h-6 md:h-8 lg:h-9',
  gapClass = 'gap-10 md:gap-14 lg:gap-16',
  grayscale = true,
  speedClass = '[animation:marquee_28s_linear_infinite]',
}) => {
  // pilih jumlah logo per breakpoint
  const mobile = brands.slice(0, mobileCount);
  const desktop = brands.slice(0, desktopCount);

  // untuk loop mulus: gandakan array (1 track saja)
  const mobileLoop = mobile.concat(mobile);
  const desktopLoop = desktop.concat(desktop);

  return (
    <div aria-label='Trusted by global brands'>
      {/* MOBILE */}
      <div className='relative overflow-hidden md:hidden'>
        <Track
          items={mobileLoop}
          heightClass={heightClass}
          gapClass={gapClass}
          grayscale={grayscale}
          speedClass={speedClass} // misal ganti ke "[animation:marquee_36s_linear_infinite]" kalau mau lebih lambat
        />
      </div>

      {/* DESKTOP */}
      <div className='relative overflow-hidden hidden md:block'>
        <Track
          items={desktopLoop}
          heightClass={heightClass}
          gapClass={gapClass}
          grayscale={grayscale}
          speedClass={speedClass}
        />
      </div>
    </div>
  );
};

export default BrandsLogo;
