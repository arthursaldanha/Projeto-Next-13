import { HiOutlinePhone } from 'react-icons/hi';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/components/Button';
import { UseMutationResult } from '@tanstack/react-query';

interface PhoneProps {
  sendOtpPhone: UseMutationResult<unknown, unknown, void, unknown>;
}

export const Phone = ({ sendOtpPhone: { mutate } }: PhoneProps) => {
  const { back } = useRouter();

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
              Autenticação de celular
            </span>
          </div>

          <div>
            <span className="font-regular font-nunito text-base text-gray_modern-700">
              Digite o número do seu celular com DDD
            </span>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div className="space-y-4">
            <div>
              <label htmlFor="password">
                <span className="sr-only">Senha</span>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiOutlinePhone className="texttext-gray-500 h-5 w-5 stroke-2" />
                  </div>
                  <input
                    type="text"
                    id="password"
                    className="texttext-gray-500 block w-full rounded-lg border border-gray-300 p-2.5 pl-10 font-nunito text-base focus:border-primary focus:ring-primary"
                    placeholder="+55 (00) 0 0000-0000"
                  />
                </div>
              </label>
            </div>

            <fieldset>
              <legend className="sr-only">Opções de envio de código</legend>

              <div className="flex items-center">
                <input
                  id="sms"
                  type="radio"
                  name="options"
                  value="SMS"
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="sms"
                  className="ml-2 block font-inter text-sm font-medium text-gray-700"
                >
                  Receber código via SMS
                </label>
              </div>

              <div className="mt-3 flex items-center">
                <input
                  id="whatsapp"
                  type="radio"
                  name="options"
                  value="WhatsApp"
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="whatsapp"
                  className="ml-2 block font-inter text-sm font-medium text-gray-700"
                >
                  Receber código via Whats app
                </label>
              </div>
            </fieldset>
          </div>

          <div className="space-y-4">
            <div>
              <Button
                type="button" // TODO change to submit
                variant="contained"
                color="primary"
                onClick={() => mutate()}
              >
                Confirmar celular
              </Button>
            </div>

            <div>
              <Button
                type="button"
                variant="outlined"
                className="border-primary text-primary"
                onClick={back}
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
