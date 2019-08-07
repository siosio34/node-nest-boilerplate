import {
  Module,
  NestModule,
  MiddlewareConsumer,
  NestMiddleware,
  Injectable,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { InvalidationTokenException } from './exception';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: Function) {
    const isAuthURL =
      req.baseUrl.includes('login') || req.baseUrl.includes('register');

    // 로그인이나 회원가입인 경우에는 헤더값 검사를 안함
    if (!isAuthURL) {
      const authToken = req.headers.authorization;

      try {
        const verifyedUser = await this.authService.verifyUserJwtToken(
          authToken,
        );

        delete verifyedUser.password;
        req.user = verifyedUser;
      } catch (error) {
        throw new InvalidationTokenException();
      }
    }

    next();
  }
}
