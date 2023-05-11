import { ComponentProps } from 'react';
import React, { Fragment } from 'react';

import clsx from 'clsx';

import { Transition } from '@headlessui/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

export type CloseDialogProps = ComponentProps<typeof Dialog.Close>;

export type ModalProps = ComponentProps<typeof Dialog.Root> & {
  onChange: () => void;
  children: React.ReactNode;
  isOutsideInteraction?: boolean;
  hasBlur?: boolean;
};

export const CloseDialog = ({ children, ...props }: CloseDialogProps) => (
  <Dialog.Close {...props}>{children}</Dialog.Close>
);

export const ButtonCloseModal = () => (
  <Dialog.Close
    className={clsx(
      'inline-flex items-center justify-center rounded-full p-1',
      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
    )}
  >
    <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
  </Dialog.Close>
);

export const Modal: React.FC<ModalProps> = ({
  open,
  onChange,
  children,
  isOutsideInteraction = true,
  hasBlur = false,
}) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onChange}
      modal={isOutsideInteraction}
    >
      <Dialog.Portal forceMount>
        <Transition.Root show={open}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              forceMount
              className={clsx(
                'fixed inset-0 z-20 bg-black/50',
                'h-full w-full',
                'flex items-end justify-center sm:items-center',
                {
                  'backdrop-blur': hasBlur,
                },
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Content
                  forceMount
                  className={clsx(
                    'z-50 max-h-screen w-full max-w-full sm:w-auto',
                    'flex items-center justify-center overflow-hidden',
                  )}
                >
                  {children}
                </Dialog.Content>
              </Transition.Child>
            </Dialog.Overlay>
          </Transition.Child>
        </Transition.Root>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
