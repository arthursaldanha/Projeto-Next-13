import { Button } from '@/shared/components/Button';
import { CardMyCoupons } from '@/shared/components/CardMyCoupons';
import { ButtonCloseModal, Modal } from '@/shared/components/Modal';

interface ModalProps {
  isOpen: boolean;
  onChange: () => void;
}

export const ModalMyCoupons = ({ isOpen, onChange }: ModalProps) => {
  return (
    <Modal open={isOpen} onChange={onChange}>
      <div className="rounded-b-none rounded-t-xl bg-white sm:rounded-xl">
        <div className="flex max-h-screen w-[713px] max-w-[100vw] flex-col p-6">
          <header className="flex items-center">
            <div className="flex-1 text-center">
              <span className="font-nunito text-3xl font-bold text-gray-700">
                Meus cupons
              </span>
            </div>

            <ButtonCloseModal />
          </header>

          <main className="mt-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="font-nunito text-lg font-bold text-gray_modern-700">
                O Grande campeão - 2023
              </span>

              <span className="font-nunito text-xs font-medium text-primary">
                182 números gerados
              </span>
            </div>

            <div className="">
              <CardMyCoupons />
            </div>

            <div>
              <Button variant="contained" color="primary" size="sm">
                Cadastar nota
              </Button>
            </div>
          </main>
        </div>
      </div>
    </Modal>
  );
};
