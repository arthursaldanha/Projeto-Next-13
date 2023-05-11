import { Button } from '@/shared/components/Button';
import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface TermsProps {
  handleAcceptTerms: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const Terms = ({
  handleAcceptTerms: { mutate },
  onGoBack,
}: TermsProps) => {
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
              Termos e condições
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Texto dos termos e condições.
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div className="space-y-4">
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
                Estou de acordo com os termos e condições de serviço e uso da
                plataforma.
              </label>
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
                Concordo em compartilhar meus dados de acordo com as regras e
                boas práticas de LGPD.
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <button
                type="button" // TODO change to submit
                className="block w-full rounded-full border border-solid border-white bg-primary py-2.5 font-inter text-base text-white"
                onClick={() => mutate()}
              >
                Criar conta
              </button>
            </div>

            <div>
              <Button
                type="button"
                variant="outlined"
                className="border-primary text-primary"
                onClick={() => onGoBack('password')}
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
