'use client';

import { Header } from '@/shared/components/Header';
import { Sidebar } from '@/shared/components/Sidebar';
import { ModalProvider } from '@/shared/context/ModalContext';
import { useDisclosure } from '@/shared/hooks/useDisclosure';
import { useClickOutside } from '@mantine/hooks';

export const RenderDashboardLayoutInClient = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const ref = useClickOutside(() => onClose());

  return (
    <ModalProvider>
      <div className="flex h-full w-full flex-col">
        <Header isOpen={isOpen} onToggle={onToggle} />

        <Sidebar ref={ref} isOpen={isOpen} onClose={onClose} />

        <div className="flex flex-1 bg-primary">
          <main className="flex-1 overflow-y-auto rounded-tl-[70px] bg-white p-4 lg:p-8 xl:p-16">
            {children}
          </main>
        </div>
      </div>
    </ModalProvider>
  );
};
