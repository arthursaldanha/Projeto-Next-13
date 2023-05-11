import { CiSearch } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';

import Image from 'next/image';

import { useModalContext } from '@/shared/context/ModalContext';

interface HeaderProps {
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  const {
    myParticipationsDisclosure,
    myCouponsDisclosure,
    createNoteDisclosure,
  } = useModalContext();

  const optionsHeader = [
    {
      src: '/menu.svg',
      alt: 'Ícone de menu',
      width: 18,
      height: 14,
      text: 'Participação',
      onclick: myParticipationsDisclosure.onOpen,
    },
    {
      src: '/receipt_checker.svg',
      alt: 'Ícone de recebido',
      width: 16,
      height: 18,
      text: 'Cadastrar nota',
      onclick: createNoteDisclosure.onOpen,
    },
    {
      src: '/gift.svg',
      alt: 'Ícone de presente',
      width: 22,
      height: 21,
      text: 'Sorteios',
    },
    {
      src: '/ticket.svg',
      alt: 'ícone de cupom',
      width: 20,
      height: 16,
      text: 'Cupom',
      onclick: myCouponsDisclosure.onOpen,
    },
  ];

  return (
    <div className="bg-white">
      <div className="rounded-br-[70px] bg-primary px-4 py-8 lg:px-8 xl:px-16">
        <nav className="mx-auto my-0 flex w-[1520px] max-w-full items-center justify-between">
          <div className="flex w-[844px] max-w-full items-center justify-between">
            <Image
              src="/logo_with_bg.svg"
              alt="Logo Mais Cupom"
              width={187}
              height={61}
              priority
            />

            <div className="hidden items-center lg:flex">
              {optionsHeader.map(
                ({ src, alt, width, height, text, onclick }) => (
                  <div
                    key={text}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                    onClick={onclick}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      priority
                    />
                    <span className="font-inter text-base font-medium text-white">
                      {text}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden 2xl:block">
              <label htmlFor="email">
                <span className="sr-only">Email</span>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <CiSearch className="texttext-gray-500 h-5 w-5 stroke-2" />
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="texttext-gray-500 block w-[472px] max-w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                    placeholder="Buscar promoção ou empresa"
                  />
                </div>
              </label>
            </div>

            <button type="button" onClick={onToggle}>
              <FiMenu className="h-6 w-6 text-white" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
