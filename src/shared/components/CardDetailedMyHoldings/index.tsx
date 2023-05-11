import Image from 'next/image';

import { Separator } from '@/shared/components/Separator';
import { formatPrice } from '@/shared/utils/currency';

export const CardDetailedMyHoldings = () => {
  return (
    <div className="w-full space-y-2 rounded-3xl bg-gray_blue-50 p-3">
      <header className="flex items-center justify-between">
        <div>
          <Image
            src="/campaign-logo.png"
            alt="Logo da empresa da campanha"
            width={107}
            height={29}
          />
        </div>

        <div>
          <span className="font-nunito text-sm font-medium text-gray_modern-400">
            02/02/2023 - 18:00
          </span>
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
            Valor da nota
          </span>
          <span className="font-nunito text-xs font-medium">
            {formatPrice(781.98)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-regular font-nunito text-xs text-gray_modern-700">
            Números gerados
          </span>
          <span className="font-nunito text-xs font-medium text-primary">
            1469, 1470, 1471, 1472
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
  );
};
