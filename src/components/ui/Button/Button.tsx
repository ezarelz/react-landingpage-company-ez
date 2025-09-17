import React from 'react';

type Variant = 'primary' | 'contrast' | 'outline' | 'ghost' | 'secondary'; // 'secondary' = alias 'contrast'
type Size = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  href?: string; // jika diisi => render <a>
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'>;

const base =
  'inline-flex cursor-pointer items-center justify-center rounded-full font-semibold transition ' +
  'focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
  'focus:ring-offset-white dark:focus:ring-offset-black select-none';

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
  xl: 'h-[52px] px-8 text-base',
};

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-600 focus:ring-brand',
  contrast:
    'bg-black text-white hover:bg-gray-900 focus:ring-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus:ring-gray-200',
  outline:
    'border bg-black  border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-400 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-500',
  ghost:
    'bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:hover:bg-white/10 dark:focus:ring-gray-500',
} as const;

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth,
  ...rest
}) => {
  const v = variant === 'secondary' ? 'contrast' : variant; // alias
  const cls = [
    base,
    sizes[size],
    variants[v as keyof typeof variants],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={cls}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
