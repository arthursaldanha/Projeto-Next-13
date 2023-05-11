'use client';

import { useState } from 'react';

import { Button } from '@/shared/components/Button';
import { OtpInput } from '@/shared/components/OtpInput';
import { UseMutationResult } from '@tanstack/react-query';

import { StepsSignUp } from '../models';

interface ConfirmPhoneProps {
  confirmOtpPhone: UseMutationResult<unknown, unknown, void, unknown>;
  // eslint-disable-next-line no-unused-vars
  onGoBack: (stepToBack: StepsSignUp) => void;
}

export const ConfirmPhone = ({
  confirmOtpPhone: { mutate },
  onGoBack,
}: ConfirmPhoneProps) => {
  const [value, setValue] = useState<string>('');

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
              Insira o código enviado para o número
            </span>
            <div>
              <span className="font-regular font-nunito text-base text-gray_modern-700">
                +55 (61) 99999-9999
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form className="space-y-5 lg:space-y-10">
          <div className="space-y-1.5">
            <OtpInput value={value} onChange={setValue} />

            <div className="texttext-gray-600 text-center">
              <span className="font-inter text-sm font-normal">
                Não recebeu um código?{' '}
                <strong className="cursor-pointer underline">Reenviar</strong>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Button
                id="validate-otp"
                type="button" // TODO change to submit
                variant="contained"
                color="primary"
                onClick={() => mutate()}
              >
                Confirmar código
              </Button>
            </div>

            <div>
              <Button
                type="button"
                variant="outlined"
                className="border-primary text-primary"
                onClick={() => onGoBack('phone')}
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
