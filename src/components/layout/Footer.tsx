const NAV = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Service' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

const SPRITE_OFFSETS: Record<
  'facebook' | 'instagram' | 'linkedin' | 'tiktok',
  number
> = {
  facebook: 0,
  instagram: 56,
  linkedin: 112,
  tiktok: 168,
};

type SocialProps = {
  type: keyof typeof SPRITE_OFFSETS;
  href: string;
  label: string;
};

function SocialIcon({ type, href, label }: SocialProps) {
  const x = SPRITE_OFFSETS[type];

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label={label}
      className='
        group relative inline-flex h-10 w-10 items-center justify-center
        rounded-full border border-gray-300 dark:border-gray-700
        overflow-hidden transition
        focus:outline-none focus:ring-2 focus:ring-[#FF5C36]
      '
    >
      {/* Light sprite */}
      <img
        src='/assets/social-media-ico.png'
        alt=''
        className="
          absolute inset-0
          h-10 w-[208px] max-w-none   /* ⬅️ penting: cegah 'max-width:100%' mengecilkan */
          select-none pointer-events-none
          dark:hidden
        "
        style={{ transform: `translateX(-${x}px)` }}
      />
      {/* Dark sprite */}
      <img
        src='/assets/social-media-icons-dark.png'
        alt=''
        className='
          absolute inset-0
          h-10 w-[208px] max-w-none   /* ⬅️ juga di dark */
          select-none pointer-events-none
          hidden dark:block
        '
        style={{ transform: `translateX(-${x}px)` }}
      />
    </a>
  );
}
export default function Footer() {
  return (
    <footer className='px-6 py-16 bg-white dark:bg-black transition-colors duration-300'>
      <div className='max-w-7xl mx-auto rounded-3xl bg-gray-100 dark:bg-gray-900 p-8 md:p-10 flex flex-col-reverse items-center text-center gap-6 lg:flex-row lg:justify-between lg:items-start lg:text-left lg:gap-0'>
        {/* LEFT: Title + Divider + Menu */}
        <div className='w-full lg:max-w-2xl space-y-6'>
          <h2 className='text-2xl font-bold leading-tight text-black dark:text-white'>
            LET’S DISCUSS YOUR <span className='block'>IDEAS</span>
          </h2>

          {/* Divider */}
          <div className='border-t border-gray-300 dark:border-gray-700 w-full mx-auto' />

          {/* Menu */}
          <nav className='flex flex-col gap-3 text-sm font-medium text-black dark:text-white lg:flex-row lg:space-x-20'>
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='hover:underline focus:outline-none'
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT: Logo + Socials */}
        <div className='w-full lg:w-auto flex flex-col items-center gap-6 lg:items-end'>
          {/* Logo */}
          <a
            href='#top'
            className='flex items-center justify-center lg:justify-end'
            aria-label='Go to top'
          >
            <img
              src='/icon/logo-symbol.png'
              alt='Logo Icon'
              className='h-6 w-auto'
            />
            <span className='ml-1 text-black font-bold dark:text-white text-lg'>
              Your Logo
            </span>
          </a>

          {/* Socials (sprite-based) */}
          <div className='flex gap-4'>
            <SocialIcon
              type='facebook'
              href='https://facebook.com'
              label='Facebook'
            />
            <SocialIcon
              type='instagram'
              href='https://instagram.com'
              label='Instagram'
            />
            <SocialIcon
              type='linkedin'
              href='https://linkedin.com'
              label='LinkedIn'
            />
            <SocialIcon
              type='tiktok'
              href='https://tiktok.com'
              label='TikTok'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
