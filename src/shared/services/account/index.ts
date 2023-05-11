import { AxiosInstance } from 'axios';

import { AccountContract } from '@/shared/models/account';

export class AccountService implements AccountContract.Implementations {
  constructor(private httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async findAccount() {
    const { data } = await this.httpClient.get<AccountContract.Account>(
      'api/account',
    );

    return data;
  }

  async updateAccount({ email }: AccountContract.Inputs.UpdateAccount) {
    const response = await this.httpClient.put<AccountContract.Account>(
      'api/account',
      {
        email,
      },
    );

    return response?.data;
  }

  async deleteAccount({ id }: AccountContract.Inputs.DeleteAccount) {
    await this.httpClient.delete('api/account', {
      data: {
        id,
      },
    });
  }
}
