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
