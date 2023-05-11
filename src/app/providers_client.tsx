'use client';

import { useState } from 'react';

import { httpClient } from '@/infra/AxiosHttpClient';
import { AuthProvider } from '@/shared/context/AuthContext';
import { AccountService, AuthService } from '@/shared/services';
import * as Tooltip from '@radix-ui/react-tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const RenderInClient = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  const accountService = new AccountService(
    httpClient({ baseURL: process.env.API_ACCOUNT as string }),
  );
  const authService = new AuthService(
    httpClient({ baseURL: process.env.API_AUTH as string }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider factory={{ authService, accountService }}>
        <Tooltip.Provider>{children}</Tooltip.Provider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
