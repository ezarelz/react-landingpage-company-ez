import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export type ResultVariant = 'success' | 'error';

export interface ResultModalProps {
  open: boolean;
  variant: ResultVariant;
  title: string;
  message: string;
  onClose: () => void;
  onPrimary?: () => void;
  primaryText?: string;
  successImgSrc?: string;
  errorImgSrc?: string;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  open,
  variant,
  title,
  message,
  onClose,
  onPrimary,
  primaryText,
  successImgSrc = '/icon/mail-success.svg',
  errorImgSrc = '/icon/mail-error.svg',
}) => {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const imgSrc = variant === 'success' ? successImgSrc : errorImgSrc;
  const btnLabel =
    primaryText ?? (variant === 'success' ? 'Back to Home' : 'Try Again');

  return (
    <div
      className='fixed inset-0 z-[999] grid place-items-center bg-black/50'
      role='dialog'
      aria-modal='true'
      onClick={onClose}
    >
      <div
        className='w-[90%] max-w-md rounded-[18px] bg-white text-gray-900 shadow-2xl dark:bg-neutral-900 dark:text-white'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-center justify-center p-6'>
          <img
            src={imgSrc}
            alt={variant === 'success' ? 'Message received' : 'Message failed'}
            className='w-28 h-28 object-contain'
            loading='lazy'
          />
        </div>

        <div className='h-px w-full bg-gray-200 dark:bg-white/10' />

        <div className='px-6 pb-6 pt-6 text-center'>
          <h3 className='mb-2 text-lg font-bold'>{title}</h3>
          <p className='mb-6 text-sm text-gray-600 dark:text-gray-300'>
            {message}
          </p>

          <Button
            onClick={onPrimary ?? onClose}
            size='xl'
            variant='primary'
            fullWidth
            className='rounded-full'
          >
            {btnLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
