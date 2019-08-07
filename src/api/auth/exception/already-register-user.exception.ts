import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyRegisterUserException extends HttpException {
  constructor() {
    super('이미 가입된 사용자입니다.', HttpStatus.CONFLICT);
  }
}
