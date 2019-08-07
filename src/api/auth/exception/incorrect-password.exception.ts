import { HttpException, HttpStatus } from '@nestjs/common';

export class IncorrectPasswordException extends HttpException {
  constructor() {
    super('패스워드가 일치하지않습니다.', HttpStatus.NOT_FOUND);
  }
}
