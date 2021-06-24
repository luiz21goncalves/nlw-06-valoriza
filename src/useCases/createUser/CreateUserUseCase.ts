import { hash } from 'bcryptjs';

import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IUserRequest = {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, admin, password }: IUserRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    return user;
  }
}
