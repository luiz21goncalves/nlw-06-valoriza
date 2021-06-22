import { User } from '../../entities/User';
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
      throw new Error('User already exists');
    }

    const user = await this.usersRepository.create({ name, email, admin });

    return user;
  }
}
