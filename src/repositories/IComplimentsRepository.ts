import { Compliment } from '../entities/Compliment';

export type ICreateCompliments = {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
};

export type IComplimentsRepository = {
  create(data: ICreateCompliments): Promise<Compliment>;
};
