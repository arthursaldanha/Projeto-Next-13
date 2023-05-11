import React from 'react';

import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'success' | 'alert' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Button = ({
  variant = 'contained',
  color,
  size = 'lg',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'flex w-full items-center justify-center',
        'rounded-full border-solid border-[#999999] font-inter font-semibold transition-all duration-200 ease-linear',
        'disabled:cursor-not-allowed disabled:bg-[#cccccc] disabled:text-[#666666]',
        'transition-all duration-200 ease-linear',
        {
          'border border-primary bg-primary text-white': color === 'primary',
          'border border-green-500 bg-green-500 text-white':
            color === 'success',
          'border border-yellow-500 bg-yellow-500 text-white':
            color === 'alert',
          'border border-error-500 bg-error-500 text-white': color === 'error',
          'border border-gray-300 bg-white text-gray-700':
            variant === 'outlined',
          'gap-2 px-[14px] py-2 text-sm': size === 'sm',
          'gap-2 px-4 py-[10px] text-sm': size === 'md',
          'gap-2 px-[18px] py-[10px] text-base': size === 'lg',
          'gap-2 px-5 py-3 text-base': size === 'xl',
          'gap-3 px-7 py-4 text-lg': size === '2xl',
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
