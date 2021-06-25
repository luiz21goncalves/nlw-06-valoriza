import { classToClass } from 'class-transformer';

import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return classToClass(users);
  }
}
