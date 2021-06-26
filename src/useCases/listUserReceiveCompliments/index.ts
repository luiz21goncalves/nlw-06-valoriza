import { ComplimentsRepository } from '../../repositories/implementations/ComplimentsRepository';
import { ListUserReceiveComplimentsController } from './ListUserReceiveComplimentsController';
import { ListUserReceiveComplimentsUseCase } from './ListUserReceiveComplimentsUseCase';

export const listUserReceiveCompliments = () => {
  const complimentsRepository = new ComplimentsRepository();
  const listUserReceiveComplimentsUseCase =
    new ListUserReceiveComplimentsUseCase(complimentsRepository);
  const listUserReceiveComplimentsController =
    new ListUserReceiveComplimentsController(listUserReceiveComplimentsUseCase);

  return { listUserReceiveComplimentsController };
};
