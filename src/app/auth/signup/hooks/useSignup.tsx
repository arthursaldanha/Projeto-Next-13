import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { Address } from '../components/Address';
import { ConfirmPhone } from '../components/ConfirmPhone';
import { DateBirth } from '../components/DateBirth';
import { Document } from '../components/Document';
import { Email } from '../components/Email';
import { Name } from '../components/Name';
import { Password } from '../components/Password';
import { Phone } from '../components/Phone';
import { Success } from '../components/Success';
import { Terms } from '../components/Terms';
import { StepsSignUp } from '../models';

export const useSignup = () => {
  const [step, setStep] = useState<StepsSignUp>('phone');

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
    onSuccess: () => setStep('document'),
  });

  const handleDocument = useMutation(() => delay(0), {
    onSuccess: () => setStep('name'),
  });

  const handleName = useMutation(() => delay(0), {
    onSuccess: () => setStep('email'),
  });

  const handleEmail = useMutation(() => delay(0), {
    onSuccess: () => setStep('address'),
  });

  const handleAddress = useMutation(() => delay(0), {
    onSuccess: () => setStep('dateBirth'),
  });

  const handleDateBirth = useMutation(() => delay(0), {
    onSuccess: () => setStep('password'),
  });

  const handlePassword = useMutation(() => delay(0), {
    onSuccess: () => setStep('terms'),
  });

  const handleAcceptTerms = useMutation(() => delay(0), {
    onSuccess: () => setStep('success'),
  });

  const components = {
    phone: {
      image: {
        src: '/auth/phone_verification.svg',
        alt: 'Ilustração representando verificação de telefone.',
        height: 570,
        width: 626,
      },
      component: <Phone sendOtpPhone={sendOtpPhone} />,
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
    document: {
      image: {
        src: '/auth/holder_document.svg',
        alt: 'Ilustração representando um documento pessoal.',
        height: 589,
        width: 648,
      },
      component: (
        <Document
          handleDocument={handleDocument}
          onGoBack={handleOnGoBackStep}
        />
      ),
    },
    name: {
      image: {
        src: '/auth/holder_name.svg',
        alt: 'Ilustração representando uma carteirinha com o nome.',
        height: 478,
        width: 648,
      },
      component: <Name handleName={handleName} onGoBack={handleOnGoBackStep} />,
    },
    email: {
      image: {
        src: '/auth/holder_email.svg',
        alt: 'Ilustração de uma carta representando um envio de e-mail.',
        height: 597,
        width: 648,
      },
      component: (
        <Email handleEmail={handleEmail} onGoBack={handleOnGoBackStep} />
      ),
    },
    address: {
      image: {
        src: '/auth/address.svg',
        alt: 'Ilustração representando um local de endereço.',
        height: 548,
        width: 648,
      },
      component: (
        <Address handleAddress={handleAddress} onGoBack={handleOnGoBackStep} />
      ),
    },
    dateBirth: {
      image: {
        src: '/auth/date.svg',
        alt: 'Ilustração de um calendário.',
        height: 460,
        width: 670,
      },
      component: (
        <DateBirth
          handleDateBirth={handleDateBirth}
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
    terms: {
      image: {
        src: '/auth/terms.svg',
        alt: 'Ilustração representando uma prancheta de termos.',
        height: 665,
        width: 670,
      },
      component: (
        <Terms
          handleAcceptTerms={handleAcceptTerms}
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
