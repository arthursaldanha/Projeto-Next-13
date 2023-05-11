import { useForm } from 'react-hook-form';
import { FiCopy } from 'react-icons/fi';

import * as yup from 'yup';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import {
  ButtonCloseModal,
  CloseDialog,
  Modal,
} from '@/shared/components/Modal';
import { Separator } from '@/shared/components/Separator';
import { yupResolver } from '@hookform/resolvers/yup';

interface ModalProps {
  isOpen: boolean;
  onChange: () => void;
}

type FormData = {
  code: string;
};

const schema = yup
  .object({
    code: yup.string().required(),
  })
  .required();

export const ModalCreateNote = ({ isOpen, onChange }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Modal open={isOpen} onChange={onChange}>
      <div className="rounded-b-none rounded-t-xl bg-white sm:rounded-xl">
        <form
          onSubmit={onSubmit}
          className="flex max-h-screen w-[690px] max-w-[100vw] flex-col"
        >
          <div className="px-6 pt-6">
            <header className="flex items-start">
              <div className="flex-1 text-center">
                <div>
                  <span className="font-inter text-lg font-semibold text-black/80">
                    Cadastre sua nota
                  </span>
                </div>

                <div>
                  <span className="font-regular font-inter text-sm text-gray-600">
                    Insira o código que está presente na sua nota.
                  </span>
                </div>
              </div>

              <ButtonCloseModal />
            </header>

            <main className="mt-5 flex items-center gap-1">
              <div className="flex-1">
                <Input
                  id="input-code"
                  type="text"
                  label="Código da nota"
                  placeholder="Digite o código"
                  {...register('code')}
                  errors={errors.code}
                />
              </div>

              <div className="group cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 group-hover:bg-gray-100/80">
                  <FiCopy className="h-5 w-5 text-gray-500 transition-colors duration-200 group-hover:text-gray-700" />
                </div>
              </div>
            </main>
          </div>

          <div className="mt-8">
            <Separator
              orientation="horizontal"
              thickness="1px"
              className="bg-gray_blue-200"
            />
            <footer className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2">
              <CloseDialog asChild onClick={onChange}>
                <Button type="button" size="md" variant="outlined">
                  Cancelar
                </Button>
              </CloseDialog>

              <Button
                type="submit"
                size="md"
                variant="contained"
                color="primary"
              >
                Continuar
              </Button>
            </footer>
          </div>
        </form>
      </div>
    </Modal>
  );
};
