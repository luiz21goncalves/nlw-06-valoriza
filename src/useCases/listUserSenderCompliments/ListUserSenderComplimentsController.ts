import { Request, Response } from 'express';

import { ListUserSenderComplimentsUseCase } from './ListUserSenderComplimentsUseCase';

export class ListUserSenderComplimentsController {
  constructor(
    private listUserSenderComplimentsUseCase: ListUserSenderComplimentsUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_sender } = request.user;

    const compliments = await this.listUserSenderComplimentsUseCase.execute({
      user_sender,
    });

    return response.json(compliments);
  }
}
