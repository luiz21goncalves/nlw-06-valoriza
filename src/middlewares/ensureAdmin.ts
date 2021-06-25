import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors/AppError';
import { UserRepository } from '../repositories/implementations/UsersRepository';

export const ensureAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.user;

  const usersRepository = new UserRepository();

  const user = await usersRepository.findById(id);

  if (!user) {
    throw new AppError('User not found');
  }

  if (user.admin) {
    return next();
  }

  throw new AppError('Unauthorized', 401);
};
