import { useRouter } from 'next/navigation';

export const Success = () => {
  const { push } = useRouter();

  return (
    <div className="space-y-10 lg:space-y-20">
      <div className="text-center">
        <span className="font-nunito text-2xl font-bold">
          Senha alterada com sucesso!
        </span>
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
