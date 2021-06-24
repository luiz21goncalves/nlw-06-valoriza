import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors/AppError';

export const ensureAdmin = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const admin = true;

  if (admin) {
    return next();
  }

  throw new AppError('Unauthorized', 401);
};
