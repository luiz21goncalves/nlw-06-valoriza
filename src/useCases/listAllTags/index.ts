import { TagsRepository } from '../../repositories/implementations/TagsRepository';
import { ListAllTagsController } from './ListAllTagsController';
import { ListAllTagsUseCase } from './ListAllTagsUseCase';

export const listAllTags = () => {
  const tagsRepository = new TagsRepository();
  const listAllTagsUseCase = new ListAllTagsUseCase(tagsRepository);
  const listAllTagsController = new ListAllTagsController(listAllTagsUseCase);

  return { listAllTagsController };
};
