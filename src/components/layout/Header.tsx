import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Service' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id='top'
      className='w-full fixed top-0 left-0 z-50 bg-white dark:bg-black shadow-sm transition-colors duration-300'
    >
      <div className='mx-auto max-w-7xl px-6 py-6 flex items-center justify-between'>
        {/* Logo */}
        <a href='#top' className='flex items-center'>
          <img
            src='/icon/logo-symbol.png'
            alt='Logo Icon'
            className='h-6 w-auto'
          />
          <span className='ml-1 font-bold text-slate-900 dark:text-white'>
            Your Logo
          </span>
        </a>

        {/* === Mobile Menu FIRST  === */}
        <div className='lg:hidden'>
          <button
            aria-label='Toggle menu'
            aria-expanded={open}
            aria-controls='mobile-nav'
            className='text-2xl text-slate-900 dark:text-white focus:outline-none'
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          {/* Dropdown Menu Mobile */}
          {open && (
            <div
              id='mobile-nav'
              className='fixed top-16 right-4 w-64 px-6 py-6 bg-white dark:bg-neutral-900 shadow-md rounded-md'
            >
              <nav className='flex flex-col space-y-4'>
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className='text-base font-medium text-slate-900 dark:text-white hover:text-orange-500'
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                ))}

                {/* CTA (pakai Button) */}
                <Button size='sm' href='#contact' className='mt-4 text-center'>
                  Let’s Talk
                </Button>
              </nav>
            </div>
          )}
        </div>

        {/* === Desktop Nav === */}
        <nav className='hidden lg:flex items-center space-x-20'>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className='text-base font-medium text-slate-900 dark:text-white hover:text-orange-500'
            >
              {n.label}
            </a>
          ))}

          <Button href='#contact' className='ml-4'>
            Let’s Talk
          </Button>
        </nav>
      </div>
    </header>
  );
}
