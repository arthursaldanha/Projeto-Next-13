import Image from 'next/image';

import { ButtonCloseModal, Modal } from '@/shared/components/Modal';

interface ModalProps {
  isOpen: boolean;
  onChange: () => void;
}

export const ModalTerms = ({ isOpen, onChange }: ModalProps) => {
  return (
    <Modal open={isOpen} onChange={onChange}>
      <div className="rounded-b-none rounded-t-xl bg-white sm:rounded-xl">
        <div className="flex max-h-screen w-[713px] max-w-[100vw] flex-col gap-5 p-6">
          <header className="flex items-center">
            <div className="flex-1 text-center">
              <span className="font-nunito text-3xl font-bold text-gray-700">
                Termos e condições
              </span>
            </div>

            <ButtonCloseModal />
          </header>

          <main className="space-y-5">
            <Image
              src="/auth/terms.svg"
              alt="Imagem de uma prancheta representando os temos e condições"
              width={299}
              height={297}
              className="mx-auto my-0"
            />

            <div>
              <span className="font-regular font-nunito text-base text-gray-700">
                Texto dos termos e condições. Texto dos termos e condições.
                Texto dos termos e condições. Texto dos termos e condições.
                Texto dos termos e condições. Texto dos termos e condições.
                Texto dos termos e condições. Texto dos termos e condições.
                Texto dos termos e condições. Texto dos termos e condições.
              </span>
            </div>
          </main>
        </div>
      </div>
    </Modal>
  );
};
