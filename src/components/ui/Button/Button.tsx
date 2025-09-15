import React from 'react';

type Variant = 'primary' | 'contrast' | 'outline' | 'ghost' | 'secondary'; // secondary = alias contrast
type Size = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  /** Jadikan tombol selebar container (untuk contact form) */
  fullWidth?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

const base = [
  'inline-flex items-center justify-center rounded-full font-semibold transition',
  'focus:outline-none focus:ring-2',
  // offset mengikuti mode biar ring terlihat
  'focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black',
  'select-none',
].join(' ');

const sizes: Record<Size, string> = {
  // tinggi kira-kira: sm=36, md=44, lg=48, xl=52
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
  xl: 'h-[52px] px-8 text-base', // cocok untuk CTA/form
};

const variants: Record<Exclude<Variant, 'secondary'>, string> = {
  primary:
    'bg-[#FF5C36] text-white hover:bg-[#ff3f17] ' + 'focus:ring-[#FF5C36]',
  contrast:
    // light: hitam, dark: putih (kebutuhan Services)
    'bg-black text-white hover:bg-gray-900 focus:ring-gray-700 ' +
    'dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus:ring-gray-200',
  outline:
    'border border-gray-300 text-gray-900 hover:bg-gray-50 ' +
    'focus:ring-gray-400 ' +
    'dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-500',
  ghost:
    'bg-transparent text-gray-900 hover:bg-gray-100 ' +
    'focus:ring-gray-300 ' +
    'dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-500',
};

const Button: React.FC<ButtonProps> = ({
  href = '#',
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...rest
}) => {
  const v = variant === 'secondary' ? 'contrast' : variant; // alias
  const cls = [
    base,
    sizes[size],
    variants[v],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
};

export default Button;
