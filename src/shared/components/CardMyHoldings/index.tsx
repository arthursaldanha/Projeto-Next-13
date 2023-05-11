import { BiPlus } from 'react-icons/bi';

import Image from 'next/image';

import { Separator } from '@/shared/components/Separator';

export const CardMyHoldings = () => {
  return (
    <div className="w-full rounded-3xl bg-gray_blue-50">
      <div className="space-y-2 p-3">
        <header className="flex items-center justify-between">
          <div>
            <span className="font-nunito text-lg font-semibold text-gray_modern-700">
              O Grande campeão - 2023
            </span>
          </div>

          <div>
            <Image
              src="/campaign-logo.png"
              alt="Logo da empresa da campanha"
              width={92}
              height={25}
            />
          </div>
        </header>

        <Separator
          orientation="horizontal"
          thickness="0.5px"
          className="my-2 bg-gray_blue-200"
        />

        <main className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-regular font-nunito text-xs text-gray_modern-700">
              Minhas Notas
            </span>
            <span className="font-nunito text-xs font-medium">32</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-regular font-nunito text-xs text-gray_modern-700">
              Prêmio
            </span>
            <span className="font-nunito text-xs font-medium text-primary">
              Hilux 0KM
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-regular font-nunito text-xs text-gray_modern-700">
              Encerramento
            </span>
            <span className="font-nunito text-xs font-medium text-error-400">
              02/02/2023 - 18:00
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-regular font-nunito text-xs text-gray_modern-700">
              Sorteio
            </span>
            <span className="font-nunito text-xs font-medium text-green-400">
              02/02/2023 - 18:00
            </span>
          </div>
        </main>
      </div>

      <div className="group cursor-pointer border-t-2 border-solid border-white p-2">
        <footer className="flex items-center justify-center gap-2">
          <BiPlus className="h-4 w-4 text-primary transition-colors duration-200 ease-linear group-hover:text-primary/80" />
          <span className="font-inter text-sm font-semibold text-primary transition-colors duration-200 ease-linear group-hover:text-primary/80">
            Cadastrar nota
          </span>
        </footer>
      </div>
    </div>
  );
};
