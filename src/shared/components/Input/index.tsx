/* eslint-disable react/display-name */
import { ComponentProps, ReactNode, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import clsx from 'clsx';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  labelIsTitle?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  errors?: FieldError | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      labelIsTitle,
      type,
      placeholder,
      startIcon,
      endIcon,
      errors,
      ...rest
    },
    ref,
  ) => {
    return (
      <label htmlFor={name}>
        <span
          className={clsx({
            'mb-1.5 font-inter text-sm font-medium text-gray_modern-700':
              labelIsTitle,
            'sr-only': !labelIsTitle,
          })}
        >
          {label}
        </span>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {startIcon}
          </div>
          <input
            id={id}
            type={type}
            name={name}
            className={clsx(
              'block w-full rounded-lg border p-2.5 font-nunito text-base text-gray-500 focus:ring-1',
              {
                'pl-10': !!startIcon,
                'pr-10': !!endIcon,
                'border-gray-300 focus:border-primary focus:ring-primary':
                  !errors,
                'border-error-300 focus:border-error-300 focus:ring-error-300':
                  !!errors,
              },
            )}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {endIcon}
          </div>
        </div>
        {!!errors && (
          <span
            id={`input_error_${id}`}
            className="ml-1.5 mt-1.5 font-inter text-sm font-normal text-error-500"
          >
            {errors?.message}
          </span>
        )}
      </label>
    );
  },
);
