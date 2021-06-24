import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { ICreateUser, IUsersRepository } from '../IUsersRepository';

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { email } });
  }

  async create({ name, email, admin, password }: ICreateUser): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      admin,
      password,
    });

    return this.repository.save(user);
  }
}
