import { Compliment } from '../../entities/Compliment';
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository';

type IListUserSerder = {
  user_sender: string;
};

export class ListUserSenderComplimentsUseCase {
  constructor(private complimentsRepository: IComplimentsRepository) {}

  async execute({ user_sender }: IListUserSerder): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.findByUserSender(
      user_sender
    );

    return compliments;
  }
}
