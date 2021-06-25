import { Compliment } from '../entities/Compliment';

export type ICreateCompliments = {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
};

export type IComplimentsRepository = {
  create(data: ICreateCompliments): Promise<Compliment>;
  findByUserReceiver(user_receiver: string): Promise<Compliment[]>;
  findByUserSender(user_sender: string): Promise<Compliment[]>;
};
