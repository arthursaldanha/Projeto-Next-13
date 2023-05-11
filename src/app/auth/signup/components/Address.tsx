import { Button } from '@/shared/components/Button';
import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface AddressProps {
  handleAddress: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const Address = ({
  handleAddress: { mutate },
  onGoBack,
}: AddressProps) => {
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
              Endereço
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite o seu endereço completo
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cep">
                <span className="sr-only">CEP</span>
                <input
                  type="text"
                  id="cep"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="CEP"
                  maxLength={8}
                />
              </label>
            </div>

            <div>
              <label htmlFor="state">
                <span className="sr-only">Estado</span>
                <input
                  type="text"
                  id="state"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="Estado"
                />
              </label>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label htmlFor="street">
                <span className="sr-only">Endereço</span>
                <input
                  type="text"
                  id="street"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="Endereço"
                />
              </label>
            </div>

            <div>
              <label htmlFor="number">
                <span className="sr-only">Número</span>
                <input
                  type="text"
                  id="number"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="Número"
                  maxLength={8}
                />
              </label>
            </div>

            <div>
              <label htmlFor="complement">
                <span className="sr-only">Complemento</span>
                <input
                  type="text"
                  id="complement"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="Complemento"
                  maxLength={8}
                />
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
                Continuar
              </button>
            </div>

            <div>
              <Button
                type="button"
                variant="outlined"
                className="border-primary text-primary"
                onClick={() => onGoBack('email')}
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
