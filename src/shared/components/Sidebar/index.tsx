/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { IoMdLogOut } from 'react-icons/io';
import { MdOutlineClose } from 'react-icons/md';

import clsx from 'clsx';
import Image from 'next/image';

import { useModalContext } from '@/shared/context/ModalContext';

import { Block } from './components/Block';
import { Item } from './components/Item';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type Ref = HTMLDivElement;

export const Sidebar = forwardRef<Ref, SidebarProps>(
  ({ isOpen, onClose }, ref) => {
    const { profileDisclosure, termsDisclosure } = useModalContext();

    return (
      <aside
        ref={ref}
        className={clsx(
          'fixed bottom-0 top-0 z-10 flex h-full w-full flex-shrink-0 flex-col bg-white opacity-100 transition-all duration-300 sm:w-96',
          {
            'right-0': isOpen,
            '-right-[640px] opacity-0 sm:-right-96': !isOpen,
          },
        )}
      >
        <header className="flex items-center justify-between p-4">
          <Image
            src="/logo.svg"
            alt="Logo Mais Cupom"
            width={120}
            height={39}
            priority
          />

          <div className="cursor-pointer p-2" onClick={onClose}>
            <MdOutlineClose className="h-6 w-6" />
          </div>
        </header>

        <div className="border-y border-solid border-gray_blue-200 px-4 py-5 text-center">
          <span className="font-nunito text-lg font-bold text-gray-900">
            Configurações
          </span>
        </div>

        <main className="space-y-6">
          <Block title="Conta" className="mt-6">
            <Item title="Editar perfil" onClick={profileDisclosure.onOpen} />
          </Block>

          <Block title="Rede social">
            <Item title="Vincular Facebook" />
            <Item title="Vincular Instagram" />
          </Block>

          <Block title="Sobre">
            <Item title="Termos e condições" onClick={termsDisclosure.onOpen} />
            <Item title="Licenças" />
            <Item title="Versão" content="2.34" />
          </Block>
        </main>

        <footer className="mt-4 px-4">
          <button className="group flex w-full items-center justify-center gap-3 rounded-[40px] border border-solid border-gray-300 px-5 py-3">
            <div>
              <IoMdLogOut className="h-6 w-6 text-gray-700 transition-colors duration-200 ease-linear group-hover:text-gray-500" />
            </div>

            <span className="font-inter text-base font-semibold text-gray-700 transition-colors duration-200 ease-linear group-hover:text-gray-500">
              Sair
            </span>
          </button>
        </footer>
      </aside>
    );
  },
);
