'use client';

import { useForm } from 'react-hook-form';
import { CiLock } from 'react-icons/ci';
import { FiMail } from 'react-icons/fi';

import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <>
      <div className="hidden bg-white lg:block">
        <div className="flex h-full w-full items-center justify-center rounded-tr-[70px] bg-primary px-32">
          <Image
            src={'/auth/key_auth.svg'}
            alt="Logo do Mais Cupom"
            width={719}
            height={623}
            className="select-none"
            priority
          />
        </div>
      </div>

      <div className="bg-primary">
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white px-4 lg:gap-32 lg:rounded-bl-[70px] lg:px-32">
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

          <div className="w-full space-y-10">
            <div className="space-y-5 lg:space-y-10">
              <div className="text-center">
                <span className="font-nunito text-3xl font-bold text-gray-700">
                  Entrar
                </span>
              </div>

              <div className="text-center">
                <span className="font-nunito text-xl font-bold text-gray-700">
                  Bem-vindo novamente!
                </span>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    id="input-email"
                    type="email"
                    label="Email"
                    placeholder="Digite o seu e-mail"
                    startIcon={
                      <FiMail className="texttext-gray-500 h-5 w-5 stroke-2" />
                    }
                    {...register('email')}
                    errors={errors.email}
                  />
                </div>

                <div>
                  <Input
                    id="input-password"
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                    startIcon={
                      <CiLock className="texttext-gray-500 h-5 w-5 stroke-1" />
                    }
                    {...register('password')}
                    errors={errors.password}
                  />
                </div>
              </div>

              <div className="mt-2 text-end">
                <Link href="/auth/forgot-password">
                  <span className="font-inter text-sm font-normal text-primary">
                    Esqueceu a senha?
                  </span>
                </Link>
              </div>

              <div className="mt-10">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid}
                >
                  Entrar
                </Button>
              </div>
            </form>
          </div>

          <div className="space-x-1 text-center font-inter">
            <span className="text-base font-normal text-gray-700">
              Não tem uma conta?
            </span>
            <Link href="/auth/signup">
              <span className="text-base font-semibold text-primary">
                Cadastre-se!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
