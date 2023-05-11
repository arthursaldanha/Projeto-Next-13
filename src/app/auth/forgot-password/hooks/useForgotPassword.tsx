import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { ConfirmPhone } from '../components/ConfirmPhone';
import { Email } from '../components/Email';
import { Password } from '../components/Password';
import { Success } from '../components/Success';
import { StepsSignUp } from '../models';

export const useForgotPassword = () => {
  const [step, setStep] = useState<StepsSignUp>('email');

  function handleOnGoBackStep(stepToBack: StepsSignUp) {
    setStep(stepToBack);
  }

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const sendOtpPhone = useMutation(() => delay(0), {
    onSuccess: () => setStep('confirmPhone'),
  });

  const confirmOtpPhone = useMutation(() => delay(0), {
    onSuccess: () => setStep('password'),
  });

  const handlePassword = useMutation(() => delay(0), {
    onSuccess: () => setStep('success'),
  });

  const components = {
    email: {
      image: {
        src: '/auth/holder_email.svg',
        alt: 'Ilustração de uma carta representando um envio de e-mail.',
        height: 597,
        width: 648,
      },
      component: <Email handleEmail={sendOtpPhone} />,
    },
    confirmPhone: {
      image: {
        src: '/auth/phone_verification.svg',
        alt: 'Ilustração representando verificação de telefone.',
        height: 570,
        width: 626,
      },
      component: (
        <ConfirmPhone
          confirmOtpPhone={confirmOtpPhone}
          onGoBack={handleOnGoBackStep}
        />
      ),
    },
    password: {
      image: {
        src: '/auth/password.svg',
        alt: 'Ilustração de um cadeado representando a autenticação por senha.',
        height: 611,
        width: 618,
      },
      component: (
        <Password
          handlePassword={handlePassword}
          onGoBack={handleOnGoBackStep}
        />
      ),
    },
    success: {
      image: {
        src: '/auth/success.svg',
        alt: 'Ilustração representando o sucesso ao cadastrar.',
        height: 595,
        width: 704,
      },
      component: <Success />,
    },
  };

  return { step, components };
};
