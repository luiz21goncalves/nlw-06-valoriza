import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IAuthenticateUser = {
  email: string;
  password: string;
};

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticateUser): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email/Password incorrect', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email/Password incorrect', 401);
    }

    const token = sign(
      {
        email: user.email,
      },
      String(process.env.JWT_SECRET),
      {
        subject: user.id,
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return token;
  }
}
