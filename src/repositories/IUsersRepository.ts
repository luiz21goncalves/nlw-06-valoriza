import { User } from '../entities/User';

export type ICreateUser = {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

export type IUsersRepository = {
  create(data: ICreateUser): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
};
