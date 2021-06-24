import { UserRepository } from '../../repositories/implementations/UsersRepository';
import { AuthenticateUseController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export const authenticateUser = () => {
  const usersRepository = new UserRepository();
  const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
  const authenticateUserController = new AuthenticateUseController(
    authenticateUserUseCase
  );

  return { authenticateUserController };
};
