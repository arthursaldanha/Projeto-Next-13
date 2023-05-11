'use client';

import Image from 'next/image';

import { useForgotPassword } from './hooks/useForgotPassword';

export default function SignUp() {
  const { step, components } = useForgotPassword();

  return (
    <>
      <div className="hidden bg-white lg:block">
        <div className="flex h-full w-full items-center justify-center rounded-tr-[70px] bg-primary px-32">
          <Image
            src={components[step].image.src}
            alt={components[step].image.alt}
            width={components[step].image.width}
            height={components[step].image.height}
            className="select-none"
            priority
          />
        </div>
      </div>

      <div className="bg-primary">
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white px-4 md:gap-16 lg:gap-24 lg:rounded-bl-[70px] lg:px-32">
          <div>
            <Image
              src={'/logo.svg'}
              alt="Logo do Mais Cupom"
              width={431}
              height={140}
              className="w-56 select-none md:w-80 lg:w-full"
              priority
            />
          </div>

          <div className="w-full">{components[step].component}</div>

          <div>steps</div>
        </div>
      </div>
    </>
  );
}
