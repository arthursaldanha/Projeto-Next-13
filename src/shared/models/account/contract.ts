/* eslint-disable @typescript-eslint/no-empty-interface */
export namespace AccountContract {
  export interface Account {}

  export namespace Inputs {
    export interface CreateAccount {
      email: string;
      password: string;
    }

    export interface UpdateAccount {
      email: string;
    }

    export interface DeleteAccount {
      id: string | number;
    }
  }

  export namespace Outputs {
    export interface CreateAccount {}

    export interface UpdateAccount {}

    export interface DeleteAccount {}
  }

  export interface Implementations {
    findAccount: () => Promise<Account>;
    updateAccount: (data: Inputs.UpdateAccount) => Promise<Account>;
    deleteAccount: (data: Inputs.DeleteAccount) => Promise<void>;
  }
}
