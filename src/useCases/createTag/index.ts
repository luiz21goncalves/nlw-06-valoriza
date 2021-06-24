import { TagsRepository } from '../../repositories/implementations/TagsRepository';
import { CreateTagController } from './CreateTagController';
import { CreateTagUseCase } from './CreateTagUseCase';

export const createTag = () => {
  const tagsRepository = new TagsRepository();
  const createTagUseCase = new CreateTagUseCase(tagsRepository);
  const createTagController = new CreateTagController(createTagUseCase);

  return { createTagController };
};
