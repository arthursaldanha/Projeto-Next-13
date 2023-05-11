import { useRouter } from 'next/navigation';

export const Success = () => {
  const { push } = useRouter();

  return (
    <div className="space-y-10 lg:space-y-20">
      <div className="space-y-4 text-center">
        <div>
          <span className="font-nunito text-2xl font-bold text-gray_modern-700">
            Parabéns!
          </span>
        </div>
        <div>
          <span className="font-regular font-nunito text-base text-gray_modern-700">
            Sua conta foi criada com sucesso, aproveite e comece a cadastrar
            seus cupons.
          </span>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="block w-full rounded-full border border-solid border-white bg-primary py-2.5 font-inter text-base text-white"
          onClick={() => push('/auth/signin')}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};
