import { AiOutlineUser } from 'react-icons/ai';

import { Button } from '@/shared/components/Button';
import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface NameProps {
  handleName: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const Name = ({ handleName: { mutate }, onGoBack }: NameProps) => {
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
              Nome
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite ou confirme o seu nome completo
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div className="space-y-5">
            <div>
              <label htmlFor="name">
                <span className="sr-only">Name</span>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineUser className="texttext-gray-500 h-5 w-5 stroke-2" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                    placeholder="Nome completo"
                  />
                </div>
              </label>
            </div>

            <div className="space-y-5">
              <div>
                <span className="font-regular font-nunito text-base text-gray_modern-700">
                  Usuário encontrado no banco de dados:
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex h-5 items-center">
                  <input
                    id="name-in-bd"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-transparent focus:ring-primary/70"
                    required
                  />
                </div>
                <label
                  htmlFor="name-in-bd"
                  className="ml-2 font-inter text-sm font-medium text-gray-700"
                >
                  Guilherme Moreno Ribeiro
                </label>
              </div>
            </div>
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
                onClick={() => onGoBack('document')}
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
