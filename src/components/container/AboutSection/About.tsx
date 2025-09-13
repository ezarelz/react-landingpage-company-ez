import React from 'react';

/** Pakai 1 gambar sprite (container-logo.png) */
const USE_SPRITE = true;

const BRANDS: { src: string; alt: string }[] = [
  { src: '/assets/brands/upwork.png', alt: 'Upwork' },
  { src: '/assets/brands/zoom.png', alt: 'Zoom' },
  { src: '/assets/brands/postman.png', alt: 'Postman' },
  { src: '/assets/brands/databricks.png', alt: 'Databricks' },
  { src: '/assets/brands/airbnb.png', alt: 'Airbnb' },
  { src: '/assets/brands/dropbox.png', alt: 'Dropbox' },
  { src: '/assets/brands/paypal.png', alt: 'PayPal' },
];

function BrandsSprite() {
  return (
    <div
      className='
    relative overflow-hidden py-7 md:py-9
    [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
    dark:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
  '
    >
      <div
        className='
      flex items-center gap-0
      [--speed:28s] [animation:marquee_var(--speed)_linear_infinite]
      motion-reduce:[animation:none]
    '
      >
        <img
          src='/assets/container-logo.png'
          alt='Trusted by Global Brands'
          loading='lazy'
          className='shrink-0 h-18 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-full object-contain grayscale opacity-90 dark:opacity-95'
        />
        <img
          src='/assets/container-logo.png'
          alt=''
          aria-hidden='true'
          loading='lazy'
          className='shrink-0 h-18 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-full object-contain grayscale opacity-90 dark:opacity-95'
        />
      </div>
    </div>
  );
}

function BrandsMarquee() {
  return (
    <div
      className='
        relative mt-6 overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
        dark:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
      '
      aria-label='Trusted by global brands'
    >
      {/* Track 1 */}
      <ul
        className='
          flex items-center gap-12 md:gap-16 whitespace-nowrap
          [--speed:28s] [animation:marquee_var(--speed)_linear_infinite]
          motion-reduce:[animation:none]
        '
      >
        {BRANDS.concat(BRANDS).map((b, i) => (
          <li key={`t1-${i}-${b.alt}`} className='shrink-0'>
            <img
              src={b.src}
              alt={`${b.alt} logo`}
              loading='lazy'
              className='
                h-7 md:h-9 lg:h-10 object-contain
                grayscale opacity-75 dark:opacity-85
              '
            />
          </li>
        ))}
      </ul>

      {/* Track 2 offset */}
      <ul
        aria-hidden='true'
        className='
          absolute inset-0 flex items-center gap-12 md:gap-16 whitespace-nowrap
          [--speed:28s] [animation:marquee_var(--speed)_linear_infinite]
          [animation-delay:calc(var(--speed)/-2)]
          motion-reduce:[animation:none]
        '
      >
        {BRANDS.concat(BRANDS).map((b, i) => (
          <li key={`t2-${i}-${b.alt}`} className='shrink-0'>
            <img
              src={b.src}
              alt=''
              loading='lazy'
              className='
                h-7 md:h-9 lg:h-10 object-contain
                grayscale opacity-75 dark:opacity-85
              '
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutSection() {
  return (
    <>
      {/* === ABOUT SECTION START === */}
      <section id='about' className='py-12'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <p className='text-base font-bold text-gray-700 dark:text-gray-300'>
            Trusted by Global Innovators &amp; Leading Brands
          </p>

          {USE_SPRITE ? <BrandsSprite /> : <BrandsMarquee />}

          <h2 className='mt-8 mb-2 text-2xl md:text-4xl font-bold'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='text-gray-600 dark:text-gray-300 text-base md:text-lg mb-10'>
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className='py-10 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
            <picture>
              <img
                src='/assets/card-1.svg'
                alt='Projects Delivered'
                className='w-[140px] h-[140px] block dark:hidden'
              />
              <img
                src='/assets/card-1_dark.png'
                alt='Projects Delivered Dark'
                className='w-[140px] h-[140px] hidden dark:block'
              />
            </picture>
            <picture>
              <img
                src='/assets/card-2.svg'
                alt='Years of Experience'
                className='w-[140px] h-[140px] block dark:hidden'
              />
              <img
                src='/assets/card-2_dark.png'
                alt='Years of Experience Dark'
                className='w-[140px] h-[140px] hidden dark:block'
              />
            </picture>
            <picture>
              <img
                src='/assets/card-3.svg'
                alt='Industry Awards Won'
                className='w-[140px] h-[140px] block dark:hidden'
              />
              <img
                src='/assets/card-3_dark.png'
                alt='Industry Awards Won Dark'
                className='w-[140px] h-[140px] hidden dark:block'
              />
            </picture>
            <picture>
              <img
                src='/assets/card-4.svg'
                alt='Client Satisfaction Rate'
                className='w-[140px] h-[140px] block dark:hidden'
              />
              <img
                src='/assets/card-4_dark.png'
                alt='Client Satisfaction Rate Dark'
                className='w-[140px] h-[140px] hidden dark:block'
              />
            </picture>
          </div>
        </div>
      </section>
      {/* === ABOUT SECTION END === */}
    </>
  );
}
