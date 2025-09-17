// src/components/container/FAQSection/FAQ.tsx
import React from 'react';
import { Button } from '@/components/ui/Button';

type FaqItem = { q: string; a: React.ReactNode };
const FAQS: FaqItem[] = [
  {
    q: 'What services do you offer?',
    a: (
      <>
        We provide custom web/app development, cloud solutions, UX/UI design,
        and more.
      </>
    ),
  },
  {
    q: 'How do I know if this is right for my business?',
    a: (
      <>
        We help you assess needs through discovery and strategy sessions
        tailored to your business goals.
      </>
    ),
  },
  {
    q: 'How much does a project cost?',
    a: (
      <>
        We tailor each solution based on your goals and budget. Get in touch for
        a detailed quote.
      </>
    ),
  },
  {
    q: 'How long does it take?',
    a: (
      <>
        The timeline depends on the project scope. A typical project may take
        between 4 to 12 weeks.
      </>
    ),
  },
  {
    q: 'Can I start with a small project first?',
    a: (
      <>
        Absolutely. We often begin with a pilot or discovery phase to ensure the
        right fit and value.
      </>
    ),
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section
      id='faq'
      className='px-4 py-16 bg-white text-gray-900 dark:bg-black dark:text-white'
      aria-labelledby='faq-heading'
    >
      <div className='mx-auto max-w-6xl'>
        {/* 1) HEADER: title kiri, subtitle kanan */}
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:items-start'>
          <h2
            id='faq-heading'
            className='text-[28px] leading-[36px] font-bold sm:text-[32px] sm:leading-[40px]'
          >
            Need Help? Start <span className='inline lg:block'>Here.</span>
          </h2>
          <p className='text-[15px] leading-[26px] text-gray-600 dark:text-gray-300 lg:ml-90 lg:text-right lg:w-[200px]'>
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* 2) DIVIDER penuh */}
        <div className='mt-6 mb-8 h-px w-full bg-gray-200 dark:bg-white/10' />

        {/* 3) CONTENT: FAQ kiri (2 kolom), konsultasi kanan (1 kolom) */}
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
          {/* LEFT: FAQ */}
          <div className='lg:col-span-2'>
            <div className='divide-y border-y border-none dark:border-none'>
              {FAQS.map(({ q, a }, i) => (
                <details
                  key={q}
                  className='group py-4'
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className='flex cursor-pointer items-center justify-between text-left text-[16px] font-semibold leading-[28px]'>
                    {q}
                    <span
                      className='ml-6 select-none text-xl transition-transform group-open:rotate-45'
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <div className='mt-2 space-y-2 text-[15px] leading-[26px] text-gray-700 dark:text-gray-300'>
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* RIGHT: Consultation Card */}
          <aside className='rounded-2xl p-5 sm:p-6 lg:p-6 bg-brand/95 text-white'>
            <div className='w-full lg:max-w-sm'>
              <h3 className='text-[22px] leading-[30px] font-bold'>
                Let’s talk it
                <br />
                through
              </h3>
              <p className='mt-2 text-[14px] leading-[24px] opacity-90'>
                book a free consultation with our team.
              </p>

              <img
                src='/assets/consultation-image.png'
                alt='Consultation'
                className='mt-4 w-full rounded-xl object-cover shadow-md'
                loading='lazy'
              />

              <div className='mt-5'>
                <Button
                  href='#contact'
                  variant='contrast'
                  size='lg'
                  fullWidth
                  className='rounded-full'
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
