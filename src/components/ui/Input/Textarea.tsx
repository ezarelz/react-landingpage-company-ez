import React from 'react';

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
  };

export const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  className = '',
  ...rest
}) => (
  <div className='flex flex-col gap-1'>
    {label && (
      <label htmlFor={id} className='text-[14px] font-semibold'>
        {label}
      </label>
    )}
    <textarea
      id={id}
      className={`w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-orange-400 dark:border-white/20 dark:bg-transparent ${className}`}
      {...rest}
    />
  </div>
);
