import { AiOutlineUser } from 'react-icons/ai';

import { Button } from '@/shared/components/Button';
import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface DocumentProps {
  handleDocument: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const Document = ({
  handleDocument: { mutate },
  onGoBack,
}: DocumentProps) => {
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
              Confirmação de CPF
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite o número do seu CPF sem pontos
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div>
            <label htmlFor="document">
              <span className="sr-only">CPF</span>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <AiOutlineUser className="texttext-gray-500 h-5 w-5 stroke-2" />
                </div>
                <input
                  type="text"
                  id="document"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="000.000.000-00"
                  maxLength={11}
                />
              </div>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <Button
                type="button" // TODO change to submit
                variant="contained"
                color="primary"
                onClick={() => mutate()}
              >
                Continuar
              </Button>
            </div>

            <div>
              <Button
                type="button"
                variant="outlined"
                className="border-primary text-primary"
                onClick={() => onGoBack('confirmPhone')}
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
