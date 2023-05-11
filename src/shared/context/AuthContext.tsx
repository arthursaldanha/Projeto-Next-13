import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { redirect } from 'next/navigation';
import { destroyCookie } from 'nookies';

import { AccountContract } from '@/shared/models/account';
import { AuthContract } from '@/shared/models/auth';

type AuthFactory = {
  accountService: AccountContract.Implementations;
  authService: AuthContract.Implementations;
};

interface AuthProviderProps {
  factory: AuthFactory;
  children: ReactNode;
}

interface AuthContextData {
  account: AccountContract.Account;
}

export const onForceLogout = () => {
  destroyCookie(undefined, 'mais_cupom.accessToken');
  destroyCookie(undefined, 'mais_cupom.account');

  redirect('/auth');
};

const AuthContext = createContext({} as AuthContextData);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  factory,
  children,
}) => {
  const [accountService] = useState<AccountContract.Implementations>(
    factory.accountService,
  );
  const [authService] = useState<AuthContract.Implementations>(
    factory.authService,
  );

  const [account, setAccount] = useState<AccountContract.Account>('');

  const value = useMemo(() => {
    return {
      account,
    };
  }, [account]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
