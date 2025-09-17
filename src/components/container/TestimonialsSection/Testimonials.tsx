import React from 'react';
import clsx from 'clsx';
import { TESTIMONIALS } from './testimonials.data';

const STAR_IMG_DEFAULT = '/assets/rating-ico.png';
const QUOTE_ICON_DEFAULT = '/assets/tdesign_quote-filled.png';

/* === Edge blur overlay with CSS mask (desktop only) === */
const BlurWrapper: React.FC<{ align: 'left' | 'right' }> = ({ align }) => {
  const alignLeft = align === 'left';
  return (
    <div
      className={clsx(
        'hidden lg:block absolute z-20 top-7 lg:top-48 h-2/3 w-[500px]',
        'bg-white dark:bg-black',
        alignLeft
          ? 'left-0 translate-x-4 translate-y-3'
          : 'right-0 -translate-x-5 translate-y-3',
        // Gradient mask
        alignLeft
          ? 'lg:[mask-image:linear-gradient(to_right,black_15%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,black_15%,transparent_100%)]'
          : 'lg:[mask-image:linear-gradient(to_left,black_15%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_left,black_15%,transparent_100%)]',
        '[mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]'
      )}
    />
  );
};

/* === Card testimonial (lebar fix 600px, quote icon overlap) === */
type CardProps = {
  active?: boolean;
  dimmed?: boolean;
  quoteIcon?: string;
  starsImg?: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
};

const Card: React.FC<CardProps> = ({
  active,
  dimmed,
  quoteIcon,
  starsImg,
  quote,
  name,
  role,
  company,
  avatar,
}) => {
  return (
    <figure
      className={clsx(
        'relative rounded-xl border px-8 pt-20 pb-14 text-center shadow-sm',
        'transition-all duration-300',
        'w-full max-w-[600px] min-h-[360px]',
        'bg-white text-gray-900 dark:bg-neutral-900 dark:text-white',
        'border-gray-200 dark:border-white/15',
        active ? 'opacity-100' : 'opacity-60',
        dimmed && 'blur-[0.5px]'
      )}
    >
      {/* quote icon – sedikit keluar di atas border kiri */}
      <img
        src={quoteIcon || QUOTE_ICON_DEFAULT}
        alt=''
        aria-hidden
        className='absolute top-0 left-0 z-10 h-[70px] w-[80px] translate-x-7 -translate-y-10'
      />

      {/* stars */}
      <div className='mb-4 flex justify-center'>
        <img
          src={starsImg || STAR_IMG_DEFAULT}
          alt='Rating'
          className='w-[100px] h-auto'
          loading='lazy'
        />
      </div>

      {/* text */}
      <blockquote className='mb-6 px-4 text-[16px] font-medium leading-[30px] text-gray-800 dark:text-gray-200'>
        “{quote}”
      </blockquote>

      {/* name + role */}
      <figcaption className='space-y-0.5'>
        <p className='text-[16px] font-bold leading-[30px]'>{name}</p>
        <p className='text-[14px] font-medium leading-[28px] text-brand'>
          {role}
          {company ? ` at ${company}` : ''}
        </p>
      </figcaption>

      {/* avatar */}
      <div className='pointer-events-none absolute left-1/2 -bottom-6 -translate-x-1/2'>
        <img
          src={avatar}
          alt={name}
          className='h-[64px] w-[64px] rounded-full border-4 border-white shadow-md dark:border-black'
          loading='lazy'
        />
      </div>
    </figure>
  );
};

/* === Main === */
export const Testimonials: React.FC = () => {
  const [idx, setIdx] = React.useState(0);

  // autoplay (opsional)
  React.useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const go = (i: number) =>
    setIdx(
      ((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  const curr = TESTIMONIALS[idx];
  const prev =
    TESTIMONIALS[(idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length];
  const next = TESTIMONIALS[(idx + 1) % TESTIMONIALS.length];

  return (
    <section
      id='testimonials'
      className='relative overflow-hidden bg-white py-16 px-4 text-gray-900 dark:bg-black dark:text-white'
      aria-labelledby='testimonials-heading'
    >
      {/* BLUR MASK kiri/kanan */}
      <BlurWrapper align='left' />
      <BlurWrapper align='right' />

      {/* Title */}
      <header className='mx-auto max-w-4xl text-center'>
        <h2
          id='testimonials-heading'
          className='text-[28px] leading-[36px] font-bold sm:text-[32px] sm:leading-[40px]'
        >
          What Partners Say About Working With Us
        </h2>
        <p className='mt-2 mb-10 text-[15px] leading-[28px] text-gray-600 dark:text-gray-300'>
          Trusted voices. Real experiences. Proven results.
        </p>
      </header>

      {/* Track 3 kartu (desktop), 1 kartu (mobile) */}
      <div className='relative mx-auto max-w-[1920px]'>
        <div className='flex items-stretch justify-center gap-8'>
          <div className='hidden lg:block'>
            <Card dimmed {...prev} />
          </div>
          <div className='w-full max-w-[600px]'>
            <Card active {...curr} />
          </div>
          <div className='hidden lg:block'>
            <Card dimmed {...next} />
          </div>
        </div>

        {/* Dots */}
        <div className='mt-12 flex justify-center gap-2'>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={clsx(
                'h-3 w-3 rounded-full transition',
                i === idx
                  ? 'bg-brand'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
