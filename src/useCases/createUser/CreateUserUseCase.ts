import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IUserRequest = {
  name: string;
  email: string;
  admin?: boolean;
};

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, admin }: IUserRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const user = await this.usersRepository.create({ name, email, admin });

    return user;
  }
}
