import 'dotenv/config';
import 'reflect-metadata';

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { AppError } from './errors/AppError';
import { routes } from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(400).json({
        statusCode: err.statusCode,
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
);

app.listen(3333, () => console.log('Server started on port', 3333));
