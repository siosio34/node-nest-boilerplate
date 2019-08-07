import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidationTokenException extends HttpException {
  constructor() {
    super('토큰 정보가 올바르지 않습니다.', HttpStatus.UNAUTHORIZED);
  }
}
