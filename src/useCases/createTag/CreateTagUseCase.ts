import { Tag } from '../../entities/Tag';
import { AppError } from '../../errors/AppError';
import { ITagsRepository } from '../../repositories/ITagsRepository';

type ITagRequest = {
  name: string;
};

export class CreateTagUseCase {
  constructor(private tagsRepository: ITagsRepository) {}

  async execute({ name }: ITagRequest): Promise<Tag> {
    const tagAlreadyExists = await this.tagsRepository.findByName(name);

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists');
    }

    const tag = this.tagsRepository.create({ name });

    return tag;
  }
}
