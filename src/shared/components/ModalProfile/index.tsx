import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import {
  ButtonCloseModal,
  CloseDialog,
  Modal,
} from '@/shared/components/Modal';
import { yupResolver } from '@hookform/resolvers/yup';

interface ModalProps {
  isOpen: boolean;
  onChange: () => void;
}

type FormData = {
  name: string;
  cpf: string;
  email: string;
  dateBirth: string;
  cep: string;
  state: string;
  street: string;
  number: string;
  complement: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().required(),
    dateBirth: yup.string().required(),
    cep: yup.string().required(),
    state: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string().required(),
  })
  .required();

export const ModalProfile = ({ isOpen, onChange }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Modal open={isOpen} onChange={onChange}>
      <div className="rounded-b-none rounded-t-xl bg-white sm:rounded-xl">
        <div className="flex max-h-screen w-[713px] max-w-[100vw] flex-col p-6">
          <header className="flex items-center">
            <div className="flex-1 text-center">
              <span className="font-nunito text-3xl font-bold text-gray-700">
                Editar perfil
              </span>
            </div>

            <ButtonCloseModal />
          </header>

          <main className="flex flex-col gap-4 py-5">
            <div>
              <Input
                id="input-name"
                type="text"
                label="Nome completo"
                labelIsTitle
                placeholder="Digite seu nome completo"
                {...register('name')}
                errors={errors.name}
              />
            </div>
            <div>
              <Input
                id="input-cpf"
                type="text"
                label="CPF"
                labelIsTitle
                placeholder="Digite o seu CPF"
                {...register('cpf')}
                errors={errors.cpf}
              />
            </div>
            <div>
              <Input
                id="input-date-birth"
                type="text"
                label="Data de Nascimento"
                labelIsTitle
                placeholder="Digite a sua data de nascimento"
                {...register('dateBirth')}
                errors={errors.dateBirth}
              />
            </div>
            <div>
              <Input
                id="input-email"
                type="email"
                label="Email"
                labelIsTitle
                placeholder="Digite o seu e-mail"
                {...register('email')}
                errors={errors.email}
              />
            </div>

            <div className="space-y-5">
              <span className="font-nunito text-base font-semibold text-gray_modern-700">
                Endereço
              </span>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Input
                    id="input-cep"
                    type="text"
                    label="CEP"
                    placeholder="Digite o seu CEP"
                    {...register('cep')}
                    errors={errors.cep}
                  />
                </div>

                <div>
                  <Input
                    id="input-state"
                    type="text"
                    label="Estado"
                    placeholder="Digite o seu estado"
                    {...register('state')}
                    errors={errors.state}
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <Input
                    id="input-street"
                    type="text"
                    label="Rua"
                    placeholder="Digite a sua rua"
                    {...register('street')}
                    errors={errors.street}
                  />
                </div>

                <div>
                  <Input
                    id="input-number"
                    type="text"
                    label="Número"
                    placeholder="Digite o número da residência"
                    {...register('number')}
                    errors={errors.number}
                  />
                </div>

                <div>
                  <Input
                    id="input-complement"
                    type="text"
                    label="Complemento"
                    placeholder="Digite o complemento"
                    {...register('complement')}
                    errors={errors.complement}
                  />
                </div>
              </div>
            </div>
          </main>

          <footer className="grid grid-cols-1 gap-3">
            <Button type="submit" size="sm" variant="contained" color="primary">
              Salvar
            </Button>

            <CloseDialog asChild onClick={onChange}>
              <Button type="button" size="sm" variant="outlined">
                Cancelar
              </Button>
            </CloseDialog>
          </footer>
        </div>
      </div>
    </Modal>
  );
};
