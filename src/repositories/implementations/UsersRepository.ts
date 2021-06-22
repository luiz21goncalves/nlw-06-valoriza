import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { ICreateUser, IUsersRepository } from '../IUsersReposository';

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { email } });
  }

  async create({ name, email, admin }: ICreateUser): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      admin,
    });

    return this.repository.save(user);
  }
}