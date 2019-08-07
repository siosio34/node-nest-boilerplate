import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('해당 사용자를 찾을수 없습니다.', HttpStatus.NOT_FOUND);
  }
}
