import { getRepository, Repository } from 'typeorm';

import { Tag } from '../../entities/Tag';
import { ICreateTag, ITagsRepository } from '../ITagsRepository';

export class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async findAll(): Promise<Tag[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Tag | undefined> {
    return this.repository.findOne(id);
  }

  async create({ name }: ICreateTag): Promise<Tag> {
    const tag = this.repository.create({
      name,
    });

    return this.repository.save(tag);
  }

  async findByName(name: string): Promise<Tag | undefined> {
    return this.repository.findOne({ where: { name } });
  }
}
