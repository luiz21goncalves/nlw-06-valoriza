import { Request, Response } from 'express';

import { CreateComplimentUseCase } from './CreateComplimentUseCase';

export class CreateComplimentController {
  constructor(private createComplimentUseCase: CreateComplimentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_sender } = request.user;
    const { user_receiver, tag_id, message } = request.body;

    const compliment = await this.createComplimentUseCase.execute({
      user_receiver,
      user_sender,
      tag_id,
      message,
    });

    return response.status(201).json(compliment);
  }
}
