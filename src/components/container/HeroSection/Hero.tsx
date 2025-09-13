import Button from '../../ui/Button/Button';

type HeroProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  ctaHref?: string;
  imageSrc?: string;
};

export default function Hero({
  title = 'Your Tech Partner for',
  highlight = 'Smarter Growth',
  subtitle = 'We deliver tailored IT solutions to help you scale with speed and confidence.',
  ctaHref = '#contact',
  imageSrc = '/hero/hero-image.png',
}: HeroProps) {
  return (
    <section className='pt-32 pb-16'>
      <div className='mx-auto max-w-7xl px-6 flex flex-col-reverse lg:flex-row items-center gap-12'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='mb-4 text-4xl leading-[1.15] font-bold md:text-6xl'>
            {title} <br />
            <span className='text-[#FF5C36]'>{highlight}</span>
          </h1>
          <p className='mb-6 text-base md:text-lg text-gray-700'>{subtitle}</p>

          {/* Pakai komponen Button */}
          <Button href={ctaHref}>Let’s Talk</Button>
        </div>

        {/* RIGHT */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img
            src={imageSrc}
            alt='Hero Illustration'
            className='w-full max-w-md'
          />
        </div>
      </div>
    </section>
  );
}
