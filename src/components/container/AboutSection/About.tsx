// src/components/container/AboutSection/About.tsx
import BrandsLogo from '../../ui/BrandLogo/BrandsLogo';
import StatCard from '../../ui/statcard/Statcards';
export type Brand = { src: string; alt: string };

const BRANDS: Brand[] = [
  { src: '/brand_logo/adobe.svg', alt: 'Adobe' },
  { src: '/brand_logo/upwork.svg', alt: 'Upwork' },
  { src: '/brand_logo/zoom.svg', alt: 'Zoom' },
  { src: '/brand_logo/postman.svg', alt: 'Postman' },
  { src: '/brand_logo/databricks.svg', alt: 'Databricks' },
  { src: '/brand_logo/airbnb.svg', alt: 'Airbnb' },
  { src: '/brand_logo/dropbox.svg', alt: 'Dropbox' },
  { src: '/brand_logo/paypal.svg', alt: 'PayPal' },
  { src: '/brand_logo/netflix.svg', alt: 'Netflix' },
];

export default function AboutSection() {
  return (
    <>
      <section id='about' className='py-12'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <p className='text-base font-bold text-gray-700 dark:text-[#FDFDFD] transition-colors'>
            Trusted by Global Innovators &amp; Leading Brands
          </p>

          {/* Marquee (individual logos) */}
          <div className='mt-6 py-4'>
            <BrandsLogo
              brands={BRANDS}
              mobileCount={9}
              desktopCount={9}
              heightClass='h-6 md:h-8 lg:h-9'
              gapClass='gap-6 md:gap-12 lg:gap-15'
              grayscale
              // speedClass default 28s; kalau mau lambat: "[animation:marquee_36s_linear_infinite]"
            />
          </div>

          <h2 className='mt-10 mb-2 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='text-base font-bold text-gray-700 dark:text-white-700'>
            Trusted by Global Innovators &amp; Leading Brands
          </p>
        </div>
      </section>

      {/* Stats (pakai StatCard props) */}
      <section className='py-10 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
            <StatCard value='50+' label='Projects Delivered' />
            <StatCard value='5+' label='Years of Experience' />
            <StatCard value='10+' label='Industry Awards Won' />
            <StatCard value='100%' label='Client Satisfaction Rate' />
          </div>
        </div>
      </section>
    </>
  );
}
