import React from 'react';

type Size = 'sm' | 'md' | 'lg';

export type StatCardProps = {
  value: string | number;
  label: string;
  size?: Size;
  className?: string;
  /** Warna angka (default brand oranye) */
  accentClassName?: string; // contoh: "text-[#FF5C36]"
};

const sizeMap: Record<Size, { box: string; value: string; label: string }> = {
  sm: { box: 'h-28 w-28', value: 'text-2xl', label: 'text-xs' },
  md: { box: 'h-36 w-36', value: 'text-3xl', label: 'text-sm' },
  lg: { box: 'h-44 w-44', value: 'text-4xl', label: 'text-sm' },
};

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  size = 'lg',
  className = '',
  accentClassName = 'text-[#FF5C36]',
}) => {
  const s = sizeMap[size];

  return (
    <div
      className={[
        'rounded-full flex items-center justify-center text-center',
        // Light Mode
        'bg-[#FAFAFA] font-semibold text-gray-600 border border-[#DEDCDC]',
        // ✅ Dark mode
        'dark:bg-neutral-900 dark:text-white dark:border-neutral-800',
        s.box,
        className,
      ].join(' ')}
      aria-label={`${value} ${label}`}
      role='img'
    >
      <div className='flex flex-col items-center leading-none'>
        <span className={`${s.value} font-extrabold ${accentClassName}`}>
          {value}
        </span>
        <span className={`${s.label} mt-2 text-gray-700 dark:text-gray-300`}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
