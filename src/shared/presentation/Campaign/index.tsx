import { AiOutlinePlus } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { FiMap } from 'react-icons/fi';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { TbShare3 } from 'react-icons/tb';

import { Button } from '@/shared/components/Button';
import { CardCampaign } from '@/shared/components/CardCampaign';
import { Separator } from '@/shared/components/Separator';
import { formatPrice } from '@/shared/utils/currency';

import { TableCashback } from './components/TableCashback';
import { TableContemplated } from './components/TableContemplated';

export const CampaignPresentation = () => {
  return (
    <div className="mx-auto my-0 w-[1520px] max-w-full space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <span className="font-nunito text-3xl font-bold text-gray_modern-700">
            O Grande campeão - 2023
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="cursor-pointer">
            <TbShare3 className="h-5 w-5 text-primary" />
          </div>

          <div className="cursor-pointer">
            <FiMap className="h-5 w-5 text-primary" />
          </div>

          <div className="cursor-pointer">
            <MdOutlineFavoriteBorder className="h-5 w-5 text-primary" />
          </div>
        </div>
      </header>

      <Separator
        orientation="horizontal"
        thickness="2px"
        className="bg-gray_blue-200"
      />

      <main className="flex flex-col gap-6 lg:flex-row">
        {/* left side */}
        <div className="flex-1 space-y-7">
          <CardCampaign
            title="O Grande campeão - 2023"
            location="Rua avenida Seu Jorge - 4KM"
            closing="02/02/2023 - 18:00"
          />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-nunito text-base font-normal text-gray_modern-700">
                Notas Cadastradas: 32
              </span>

              <span className="font-nunito text-sm font-bold text-primary">
                Ver notas
              </span>
            </div>

            <Separator
              orientation="horizontal"
              thickness="0.5px"
              className="bg-gray_blue-200"
            />

            <div className="flex items-center justify-between">
              <span className="font-nunito text-base font-normal text-gray_modern-700">
                Números acumulados: 150
              </span>

              <span className="font-nunito text-sm font-bold text-primary">
                Ver meus números
              </span>
            </div>
          </div>
        </div>

        <Separator
          orientation="vertical"
          thickness="0.5px"
          className="hidden bg-gray_blue-200 lg:block"
        />

        {/* right side */}
        <div className="flex-1 space-y-5">
          {/* TODO Componentizar esse carinha aq */}
          <div className="w-full space-y-2 rounded-xl bg-gray_blue-50 px-4 py-6 shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <BiCoinStack className="h-5 w-5 text-gray_modern-700" />

                <span className="font-nunito text-lg font-medium text-gray_modern-700">
                  Cashback
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-nunito text-lg font-medium text-gray_blue-400">
                  {formatPrice(38.48)}
                </span>

                <IoIosArrowUp className="h-4 w-4 text-gray_modern-700" />
              </div>
            </div>

            <Separator
              orientation="horizontal"
              thickness="0.5px"
              className="bg-gray_blue-200"
            />

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-nunito text-base font-normal text-gray_modern-700">
                  Total em compras
                </span>
                <span className="font-nunito text-sm font-medium text-gray_modern-700">
                  {formatPrice(781.98)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-nunito text-base font-normal text-gray_modern-700">
                  Cashback acumulado
                </span>
                <span className="font-nunito text-sm font-medium text-gray_modern-700">
                  {formatPrice(38.48)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-nunito text-base font-normal text-gray_modern-700">
                  Resgatado
                </span>
                <span className="font-nunito text-sm font-medium text-gray_modern-700">
                  {formatPrice(0)}
                </span>
              </div>
            </div>

            <Separator
              orientation="horizontal"
              thickness="0.5px"
              className="bg-gray_blue-200"
            />

            <div className="space-y-2 text-center">
              <TableCashback />

              <span className="font-nunito text-sm font-medium text-primary">
                Ver mais
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-nunito text-lg font-bold text-gray_modern-700">
                Contemplados
              </span>
              <span className="font-nunito text-base font-medium text-primary">
                3
              </span>
            </div>

            <div>
              <TableContemplated />
            </div>
          </div>
        </div>
      </main>

      <footer className="grid grid-cols-1 gap-11 sm:grid-cols-2">
        <Button type="button" size="md" variant="contained" color="primary">
          <AiOutlinePlus className="h-4 w-4 stroke-1" />
          Cadastrar nota
        </Button>

        <Button type="button" size="md" variant="outlined">
          Ver regulamento
        </Button>
      </footer>
    </div>
  );
};
