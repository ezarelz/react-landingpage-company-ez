import { useState } from 'react';

type Step = { title: string; desc: string };

const STEPS: Step[] = [
  { title: 'Discovery & Consultation', desc: 'Understand Your Needs & Goals' },
  { title: 'Planning & Strategy', desc: 'Build a Clear, Scalable Roadmap' },
  { title: 'Design & Prototyping', desc: 'Craft UX That Converts' },
  {
    title: 'Development & Implementation',
    desc: 'Deliver With Speed & Precision',
  },
  { title: 'Testing & Optimization', desc: 'Ensure Quality at Every Step' },
  { title: 'Launch & Growth', desc: 'Scale, Measure, & Improve Continuously' },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <img
      src={open ? '/icon/chevron-up.svg' : '/icon/chevron-down.svg'}
      alt={open ? 'Collapse' : 'Expand'}
      className='
        h-5 w-5 opacity-80
        [filter:brightness(0)_saturate(100%)]    /* black chevron in light */
        dark:[filter:none]                       /*  keep original color in dark */
      '
    />
  );
}

type CardProps = {
  step: Step;
  open: boolean;
  onToggle: () => void;
  align?: 'left' | 'right'; // desktop only
};

function ProcessCard({ step, open, onToggle }: CardProps) {
  return (
    <div className='max-w-[520px] rounded-2xl border border-gray-200 bg-white shadow-sm px-5 py-4 md:px-6 md:py-5'>
      <button
        type='button'
        className='w-full flex items-center justify-between gap-4'
        onClick={onToggle}
        aria-expanded={open}
      >
        <h3 className='text-base md:text-lg font-semibold text-gray-900'>
          {step.title}
        </h3>
        <Chevron open={open} />
      </button>

      <div className={open ? 'mt-1 md:mt-2 block' : 'hidden'}>
        <p className='text-sm text-gray-500'>{step.desc}</p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  // buka step pertama secara default
  const [openMap, setOpenMap] = useState<boolean[]>(
    Array.from({ length: STEPS.length }, (_, i) => i === 0)
  );

  //Kalau mau buka semua Card Steps

  /*
const [openMap, setOpenMap] = useState<boolean[]>(
  () => Array(STEPS.length).fill(true)
);


*/

  const toggle = (i: number) =>
    setOpenMap((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id='process' className='py-16'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Heading */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Our Process
          </h2>
          <p className='mt-2 text-gray-600'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* ============= MOBILE (vertical timeline) ============= */}
        <div className='md:hidden relative'>
          {/* vertical line */}
          <div
            className='absolute left-5 top-0 bottom-0 w-px bg-gray-300'
            aria-hidden='true'
          />
          <ul className='space-y-8'>
            {STEPS.map((s, i) => (
              <li key={i} className='relative pl-16'>
                {/* number dot */}
                <span className='absolute left-0 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5C36] text-white font-bold'>
                  {i + 1}
                </span>

                <ProcessCard
                  step={s}
                  open={openMap[i]}
                  onToggle={() => toggle(i)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* ============= DESKTOP (alternating two-column with center line) ============= */}
        <div className='hidden md:block relative'>
          {/* center line */}
          <div
            className='absolute left-1/2 top-0 bottom-0 w-px bg-gray-300'
            aria-hidden='true'
          />

          <div className='grid grid-cols-1 gap-y-12'>
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0; // kiri utk 1,3,5...
              return (
                <div key={i} className='relative grid grid-cols-2 items-center'>
                  {/* kolom kiri */}
                  <div
                    className={
                      isLeft
                        ? 'pr-10'
                        : 'pr-10 opacity-0 pointer-events-none select-none'
                    }
                  >
                    {isLeft && (
                      <div className='flex justify-end'>
                        <ProcessCard
                          step={s}
                          open={openMap[i]}
                          onToggle={() => toggle(i)}
                          align='left'
                        />
                      </div>
                    )}
                  </div>

                  {/* kolom kanan */}
                  <div
                    className={
                      !isLeft
                        ? 'pl-10'
                        : 'pl-10 opacity-0 pointer-events-none select-none'
                    }
                  >
                    {!isLeft && (
                      <div className='flex justify-start'>
                        <ProcessCard
                          step={s}
                          open={openMap[i]}
                          onToggle={() => toggle(i)}
                          align='right'
                        />
                      </div>
                    )}
                  </div>

                  {/* number bubble di garis tengah */}
                  <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5C36] text-white font-bold'>
                    {i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
