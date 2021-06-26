import { Request, Response } from 'express';

import { ListUserReceiveComplimentsUseCase } from './ListUserReceiveComplimentsUseCase';

export class ListUserReceiveComplimentsController {
  constructor(
    private listUserReceiveComplimentsUseCase: ListUserReceiveComplimentsUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_receiver } = request.user;

    const compliments = await this.listUserReceiveComplimentsUseCase.execute({
      user_receiver,
    });

    return response.json(compliments);
  }
}
