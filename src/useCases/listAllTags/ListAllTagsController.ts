import { Request, Response } from 'express';

import { ListAllTagsUseCase } from './ListAllTagsUseCase';

export class ListAllTagsController {
  constructor(private listAllTagsUseCase: ListAllTagsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const tags = await this.listAllTagsUseCase.execute();

    return response.json(tags);
  }
}
