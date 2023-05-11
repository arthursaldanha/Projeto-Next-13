import { CiLock } from 'react-icons/ci';

import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface PasswordProps {
  handlePassword: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const Password = ({
  handlePassword: { mutate },
  onGoBack,
}: PasswordProps) => {
  return (
    <div className="space-y-5 lg:space-y-10">
      <div className="space-y-5 text-center lg:space-y-10">
        <div>
          <span className="font-nunito text-3xl font-bold text-gray_modern-700">
            Recuperação de senha
          </span>
        </div>

        <div className="space-y-2.5 lg:space-y-5">
          <div>
            <span className="font-nunito text-xl font-bold text-gray_modern-700">
              Senha
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite sua nova senha
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div className="space-y-5">
            <div>
              <label htmlFor="password">
                <span className="sr-only">Senha</span>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <CiLock className="texttext-gray-500 h-5 w-5 stroke-1" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                    placeholder="Senha"
                  />
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="confirm-password">
                <span className="sr-only">Confirmação de senha</span>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <CiLock className="texttext-gray-500 h-5 w-5 stroke-1" />
                  </div>
                  <input
                    type="password"
                    id="confirm-password"
                    className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                    placeholder="Confirmação de senha"
                  />
                </div>
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
                Recuperar senha
              </button>
            </div>

            <div>
              <button
                type="button"
                className="block w-full rounded-full border border-solid border-primary bg-transparent py-2.5 font-inter text-base text-primary"
                onClick={() => onGoBack('confirmPhone')}
              >
                Voltar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
