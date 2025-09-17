import React from 'react';
import { SERVICES } from './ServiceData';

export const Services: React.FC = () => {
  return (
    <section
      id='services'
      className='py-16 px-4 bg-white text-gray-900 dark:bg-black dark:text-white'
      aria-labelledby='services-heading'
    >
      <header className='max-w-3xl mx-auto text-center'>
        <h2
          id='services-heading'
          className='text-[28px] leading-[36px] font-bold mb-2 sm:text-[32px] sm:leading-[40px]'
        >
          Smart IT Solutions That Grow With You
        </h2>
        <p className='text-[15px] leading-[28px] text-gray-600 dark:text-gray-300 mb-10'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </header>

      <ul className='max-w-6xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
        {SERVICES.map(({ icon, alt, title, desc }) => (
          <li
            key={title}
            className='p-6 rounded-xl shadow-sm border border-transparent dark:border-white/20 flex items-start gap-4 text-center lg:text-left'
          >
            <img
              src={icon}
              alt={alt}
              className='w-12 h-12 mx-auto lg:mx-0'
              loading='lazy'
            />
            <article>
              <h3 className='text-[16px] leading-[30px] font-bold mb-1'>
                {title}
              </h3>
              <p className='text-[14px] leading-[28px] text-gray-700 dark:text-gray-300'>
                {desc}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
