import { ComplimentsRepository } from '../../repositories/implementations/ComplimentsRepository';
import { ListUserSenderComplimentsController } from './ListUserSenderComplimentsController';
import { ListUserSenderComplimentsUseCase } from './ListUserSenderComplimentsUseCase';

export const listUserSenderCompliments = () => {
  const complimentsRepository = new ComplimentsRepository();
  const listUserSenderComplimentsUseCase = new ListUserSenderComplimentsUseCase(
    complimentsRepository
  );
  const listUserSenderComplimentsController =
    new ListUserSenderComplimentsController(listUserSenderComplimentsUseCase);

  return { listUserSenderComplimentsController };
};
