import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin, password } = request.body;

    const user = await this.createUserUseCase.execute({
      name,
      email,
      admin,
      password,
    });

    return response.status(201).json(user);
  }
}
