import { MdDateRange } from 'react-icons/md';

import { Button } from '@/shared/components/Button';
import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface DateBirthProps {
  handleDateBirth: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const DateBirth = ({
  handleDateBirth: { mutate },
  onGoBack,
}: DateBirthProps) => {
  return (
    <div className="space-y-5 lg:space-y-10">
      <div className="space-y-5 text-center lg:space-y-10">
        <div>
          <span className="font-nunito text-3xl font-bold text-gray_modern-700">
            Cadastre-se
          </span>
        </div>

        <div className="space-y-2.5 lg:space-y-5">
          <div>
            <span className="font-nunito text-xl font-bold text-gray_modern-700">
              Data de nascimento
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite o sua data de nascimento
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div>
            <label htmlFor="date-birth">
              <span className="sr-only">Data de Nascimento</span>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdDateRange className="texttext-gray-500 h-5 w-5" />
                </div>
                <input
                  type="date"
                  id="date-birth"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                  lang="pt-BR"
                />
              </div>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <button
                type="button" // TODO change to submit
                className="block w-full rounded-full border border-solid border-white bg-primary py-2.5 font-inter text-base text-white"
                onClick={() => mutate()}
              >
                Continuar
              </button>
            </div>

            <div>
              <Button
                type="button"
                variant="outlined"
                className="border-primary text-primary"
                onClick={() => onGoBack('address')}
              >
                Voltar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
