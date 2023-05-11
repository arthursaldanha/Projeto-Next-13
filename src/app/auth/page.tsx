import Image from 'next/image';
import Link from 'next/link';

export default function Principal() {
  return (
    <>
      <div className="hidden bg-primary lg:block">
        <div className="flex h-full w-full items-center justify-center rounded-tr-[70px] bg-white px-32">
          <Image
            src={'/logo.svg'}
            alt="Logo do Mais Cupom"
            width={794}
            height={257}
            className="select-none"
            priority
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="flex h-full w-full items-center justify-center bg-primary px-4 lg:rounded-bl-[70px] lg:px-32">
          <div className="space-y-24">
            <Image
              src={'/auth/speech_bubble.svg'}
              alt="Balão de fala"
              width={618}
              height={577}
              className="select-none"
              priority
            />

            <div className="space-y-4">
              <div>
                <Link href="/auth/signin">
                  <button className="block w-full rounded-full border border-solid border-white bg-white py-2.5 font-inter text-base text-primary">
                    Entrar
                  </button>
                </Link>
              </div>

              <div>
                <Link href="/auth/signup">
                  <button className="block w-full rounded-full border border-solid border-white bg-transparent py-2.5 font-inter text-base text-white">
                    Cadastre-se
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
