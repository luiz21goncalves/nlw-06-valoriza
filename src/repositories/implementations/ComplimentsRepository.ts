import { getRepository, Repository } from 'typeorm';

import { Compliment } from '../../entities/Compliment';
import {
  IComplimentsRepository,
  ICreateCompliments,
} from '../IComplimentsRepository';

export class ComplimentsRepository implements IComplimentsRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async findByUserReceiver(user_receiver: string): Promise<Compliment[]> {
    return this.repository.find({
      where: { user_receiver },
      relations: ['tag', 'userSender', 'userReceiver'],
    });
  }

  async findByUserSender(user_sender: string): Promise<Compliment[]> {
    return this.repository.find({
      where: { user_sender },
      relations: ['tag', 'userSender', 'userReceiver'],
    });
  }

  async create({
    user_receiver,
    user_sender,
    tag_id,
    message,
  }: ICreateCompliments): Promise<Compliment> {
    const compliment = this.repository.create({
      user_receiver,
      user_sender,
      tag_id,
      message,
    });

    return this.repository.save(compliment);
  }
}
