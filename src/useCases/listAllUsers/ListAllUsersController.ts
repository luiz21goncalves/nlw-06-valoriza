import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

export class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.listAllUsersUseCase.execute();

    return response.json(users);
  }
}
