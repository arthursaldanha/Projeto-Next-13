import { AxiosInstance } from 'axios';

import { AuthContract } from '@/shared/models/auth';

export class AuthService implements AuthContract.Implementations {
  constructor(private httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async signIn({ email, password }: AuthContract.Inputs.SignIn) {
    const response = await this.httpClient.post<AuthContract.Outputs.SignIn>(
      'api/v1/user_auth/sign_in',
      {
        email,
        password,
      },
    );

    return response?.data;
  }
}
