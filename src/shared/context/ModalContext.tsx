import { createContext, ReactNode, useContext, useMemo } from 'react';

import { ModalCreateNote } from '@/shared/components/ModalCreateNote';
import { ModalMyCoupons } from '@/shared/components/ModalMyCoupons';
import { ModalMyParticipations } from '@/shared/components/ModalMyParticipations';
import { ModalProfile } from '@/shared/components/ModalProfile';
import { ModalTerms } from '@/shared/components/ModalTerms';
import { DisclosureData, useDisclosure } from '@/shared/hooks/useDisclosure';

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextData {
  myParticipationsDisclosure: DisclosureData;
  myCouponsDisclosure: DisclosureData;
  createNoteDisclosure: DisclosureData;
  profileDisclosure: DisclosureData;
  termsDisclosure: DisclosureData;
}

const ModalContext = createContext({} as ModalContextData);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const myParticipationsDisclosure = useDisclosure();
  const myCouponsDisclosure = useDisclosure();
  const createNoteDisclosure = useDisclosure();
  const profileDisclosure = useDisclosure();
  const termsDisclosure = useDisclosure();

  const value = useMemo(() => {
    return {
      myParticipationsDisclosure,
      myCouponsDisclosure,
      createNoteDisclosure,
      profileDisclosure,
      termsDisclosure,
    };
  }, [
    myParticipationsDisclosure,
    myCouponsDisclosure,
    createNoteDisclosure,
    profileDisclosure,
    termsDisclosure,
  ]);

  return (
    <ModalContext.Provider value={value}>
      {children}

      <ModalMyParticipations
        isOpen={myParticipationsDisclosure.isOpen}
        onChange={myParticipationsDisclosure.onClose}
      />
      <ModalMyCoupons
        isOpen={myCouponsDisclosure.isOpen}
        onChange={myCouponsDisclosure.onClose}
      />
      <ModalCreateNote
        isOpen={createNoteDisclosure.isOpen}
        onChange={createNoteDisclosure.onClose}
      />
      <ModalProfile
        isOpen={profileDisclosure.isOpen}
        onChange={profileDisclosure.onClose}
      />
      <ModalTerms
        isOpen={termsDisclosure.isOpen}
        onChange={termsDisclosure.onClose}
      />
    </ModalContext.Provider>
  );
};
