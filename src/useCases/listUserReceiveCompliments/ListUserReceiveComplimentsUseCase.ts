import { Compliment } from '../../entities/Compliment';
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository';

type IListUserReceiver = {
  user_receiver: string;
};

export class ListUserReceiveComplimentsUseCase {
  constructor(private complimentsRepository: IComplimentsRepository) {}

  async execute({ user_receiver }: IListUserReceiver): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.findByUserReceiver(
      user_receiver
    );

    return compliments;
  }
}
