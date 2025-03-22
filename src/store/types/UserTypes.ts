export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    address?: string;
  }
  
  export interface IUserState {
    users: IUser[];
    loading: boolean;
    error: string | null;
  }
  