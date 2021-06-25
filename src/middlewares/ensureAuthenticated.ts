import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';

type IPayload = {
  sub: string;
};

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, String(process.env.JWT_SECRET)) as IPayload;

    request.user = { id: sub };

    return next();
  } catch (err) {
    console.error(err);
    throw new AppError('Token invalid', 401);
  }
};
