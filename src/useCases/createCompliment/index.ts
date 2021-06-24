import { ComplimentsRepository } from '../../repositories/implementations/ComplimentsRepository';
import { TagsRepository } from '../../repositories/implementations/TagsRepository';
import { UserRepository } from '../../repositories/implementations/UsersRepository';
import { CreateComplimentController } from './CreateComplimentController';
import { CreateComplimentUseCase } from './CreateComplimentUseCase';

export const createCompliment = () => {
  const complimentsRepository = new ComplimentsRepository();
  const userRepository = new UserRepository();
  const tagsRepository = new TagsRepository();
  const createComplimentUseCase = new CreateComplimentUseCase(
    complimentsRepository,
    userRepository,
    tagsRepository
  );
  const createComplimentController = new CreateComplimentController(
    createComplimentUseCase
  );

  return { createComplimentController };
};
