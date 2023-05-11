'use client';

import { ComponentProps } from 'react';

import clsx from 'clsx';

import { Root } from '@radix-ui/react-separator';

export type SeparatorProps = ComponentProps<typeof Root> & {
  thickness?: string;
};

export const Separator = ({
  orientation,
  thickness = '1px',
  ...props
}: SeparatorProps) => {
  return (
    <Root
      className={clsx({
        'w-full': orientation === 'horizontal',
        'h-full': orientation === 'vertical',
      })}
      style={
        orientation === 'horizontal'
          ? { height: thickness }
          : { width: thickness }
      }
      {...props}
    />
  );
};
