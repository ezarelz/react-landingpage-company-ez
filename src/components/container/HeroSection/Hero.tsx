import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';

type HeroProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  ctaHref?: string;
  lightImage?: string;
  darkImage?: string;
};

export default function Hero({
  title = 'Your Tech Partner for',
  highlight = 'Smarter Growth',
  subtitle = 'We deliver tailored IT solutions to help you scale with speed and confidence.',
  ctaHref = '#contact',
  lightImage = '/hero/hero-image.png',
  darkImage = '/hero/hero-image-dark.png',
}: HeroProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // gunakan prefers-color-scheme untuk deteksi mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section className='pt-32 pb-16'>
      <div className='mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12'>
        {/* LEFT (Text) */}
        <div className='w-full lg:w-1/2 text-left'>
          <h1 className='mb-4 text-3xl md:text-5xl leading-[1.15] font-bold'>
            {title} <br />
            <span className='text-[#FF5C36]'>{highlight}</span>
          </h1>
          <p className='mb-6 text-base md:text-lg text-gray-700 dark:text-gray-300'>
            {subtitle}
          </p>

          <Button
            href={ctaHref}
            size='lg'
            className='w-full md:w-[250px] md:h-11 md:px-6 md:text-sm'
          >
            Let’s Talk
          </Button>
        </div>

        {/* RIGHT (Image) */}
        <div className='w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0'>
          <img
            src={isDark ? darkImage : lightImage}
            alt='Hero Illustration'
            className='w-full max-w-md'
            loading='eager'
            decoding='async'
          />
        </div>
      </div>
    </section>
  );
}
