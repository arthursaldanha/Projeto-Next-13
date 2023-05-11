import { HiOutlineMail } from 'react-icons/hi';

import { useRouter } from 'next/navigation';

import { UseMutationResult } from '@tanstack/react-query';

interface EmailProps {
  handleEmail: UseMutationResult<unknown, unknown, void, unknown>;
}

export const Email = ({ handleEmail: { mutate } }: EmailProps) => {
  const { back } = useRouter();

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
              E-mail
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite o seu e-mail
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div>
            <label htmlFor="email">
              <span className="sr-only">E-mail</span>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiOutlineMail className="texttext-gray-500 h-5 w-5 stroke-2" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                  placeholder="E-mail"
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
              <button
                type="button"
                className="block w-full rounded-full border border-solid border-primary bg-transparent py-2.5 font-inter text-base text-primary"
                onClick={back}
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
