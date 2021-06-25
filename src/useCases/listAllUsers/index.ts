import { UserRepository } from '../../repositories/implementations/UsersRepository';
import { ListAllUsersController } from './ListAllUsersController';
import { ListAllUsersUseCase } from './ListAllUsersUseCase';

export const listAllUsers = () => {
  const usersRepository = new UserRepository();
  const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
  const listAllUsersController = new ListAllUsersController(
    listAllUsersUseCase
  );

  return { listAllUsersController };
};
