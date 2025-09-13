// src/components/ui/Button/Button.tsx
import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant; // opsional
  size?: Size; // opsional
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

const base =
  'inline-flex items-center justify-center rounded-full font-semibold transition ' +
  'focus:outline-none focus:ring-2 focus:ring-offset-2';

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'bg-[#FF5C36] hover:bg-[#ff3f17] text-white focus:ring-[#FF5C36]',
  secondary:
    'bg-gray-900 text-white hover:bg-black focus:ring-gray-900 ' +
    'dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus:ring-white',
  outline:
    'border border-gray-300 text-gray-900 hover:bg-gray-50 ' +
    'dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 focus:ring-gray-300',
  ghost:
    'bg-transparent text-gray-900 hover:bg-gray-100 ' +
    'dark:text-white dark:hover:bg-gray-800 focus:ring-gray-300',
};

const Button: React.FC<ButtonProps> = ({
  href = '#',
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...rest
}) => {
  const cls = [base, sizes[size], variants[variant], className].join(' ');
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
};

export default Button;
