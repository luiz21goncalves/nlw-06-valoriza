import { Compliment } from '../../entities/Compliment';
import { AppError } from '../../errors/AppError';
import { IComplimentsRepository } from '../../repositories/IComplimentsRepository';
import { ITagsRepository } from '../../repositories/ITagsRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IComplimentRequest = {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
};

export class CreateComplimentUseCase {
  constructor(
    private complimentsRepository: IComplimentsRepository,
    private usersRepository: IUsersRepository,
    private tagsRepository: ITagsRepository
  ) {}

  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: IComplimentRequest): Promise<Compliment> {
    if (user_sender === user_receiver) {
      throw new AppError('Incorrect user receiver');
    }

    const tag = await this.tagsRepository.findById(tag_id);

    if (!tag) {
      throw new AppError('Tag does not exists');
    }

    const userSender = await this.usersRepository.findById(user_sender);

    if (!userSender) {
      throw new AppError('User sender does not exists');
    }

    const userReceiver = await this.usersRepository.findById(user_receiver);

    if (!userReceiver) {
      throw new AppError('User receiver does not exists');
    }

    const compliment = await this.complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return compliment;
  }
}
