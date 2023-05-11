/* eslint-disable @typescript-eslint/no-empty-interface */
export namespace AuthContract {
  export namespace Inputs {
    export interface SignIn {
      email: string;
      password: string;
    }
  }

  export namespace Outputs {
    export interface SignIn {
      success: boolean;
      errors: string[];
      accessToken: string;
    }
  }

  export interface Implementations {
    signIn: (data: Inputs.SignIn) => Promise<Outputs.SignIn>;
  }
}
