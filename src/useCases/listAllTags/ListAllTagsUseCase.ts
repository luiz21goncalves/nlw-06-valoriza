import { classToClass } from 'class-transformer';

import { Tag } from '../../entities/Tag';
import { ITagsRepository } from '../../repositories/ITagsRepository';

export class ListAllTagsUseCase {
  constructor(private tagsRepository: ITagsRepository) {}

  async execute(): Promise<Tag[]> {
    const tags = await this.tagsRepository.findAll();

    return classToClass(tags);
  }
}
