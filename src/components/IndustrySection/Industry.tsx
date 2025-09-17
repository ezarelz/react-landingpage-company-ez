import React from 'react';

type ItemKey = 'fintech' | 'ecommerce' | 'healthcare';

const ITEMS = [
  {
    key: 'fintech' as ItemKey,
    label: 'Fintech',
    desc: 'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    imgSrc: '/assets/industry-image.png',
    imgAlt: 'Fintech Industry',
  },
  {
    key: 'ecommerce' as ItemKey,
    label: 'E-Commerce',
    desc: 'E-commerce solutions for online stores, payment gateways, and logistics that scale with your business.',
    imgSrc: '/assets/industry-image.png',
    imgAlt: 'E-Commerce Industry',
  },
  {
    key: 'healthcare' as ItemKey,
    label: 'Healthcare',
    desc: 'Digital solutions for clinics, hospitals, and telehealth providers with strong security and compliance.',
    imgSrc: '/assets/industry-image.png',
    imgAlt: 'Healthcare Industry',
  },
];

export const IndustrySection: React.FC = () => {
  const [active, setActive] = React.useState<ItemKey>('fintech');
  const current = React.useMemo(
    () => ITEMS.find((i) => i.key === active)!,
    [active]
  );

  return (
    <section
      id='industry'
      className='py-12 px-4 bg-white text-gray-900 dark:bg-black dark:text-white'
      aria-labelledby='industry-heading'
    >
      <header className='mx-auto max-w-4xl text-center'>
        <h2
          id='industry-heading'
          className='text-left text-[30px] leading-[38px] font-bold sm:text-[34px] sm:leading-[42px]'
        >
          Built for Your Industry
        </h2>
        <p className='text-left mt-1 mb-8 text-[16px] sm:text-[17px] leading-[26px] text-gray-600 dark:text-gray-300'>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </header>

      <div className='max-w-4xl mx-auto flex flex-col gap-8 lg:flex-row'>
        {/* Tabs on the left */}
        <ul className='flex flex-col space-y-3 text-[17px] font-medium lg:w-1/4'>
          {ITEMS.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setActive(item.key)}
                className={[
                  'w-full text-left pl-4 border-l transition',
                  active === item.key
                    ? 'text-brand border-brand border-l-4'
                    : 'text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/20 hover:text-gray-800 dark:hover:text-white',
                ].join(' ')}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Content on the right (stacked vertically) */}
        <div className='flex flex-col gap-4 lg:w-3/4'>
          <p className='text-[17px] leading-[28px] text-gray-700 dark:text-gray-300'>
            {current.desc}
          </p>
          <img
            key={current.imgSrc}
            src={current.imgSrc}
            alt={current.imgAlt}
            className='w-full rounded-xl transition-opacity duration-200'
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
