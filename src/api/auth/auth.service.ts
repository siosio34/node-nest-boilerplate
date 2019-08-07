import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { LoginDto, RegisterDto } from './dto';
import {
  UserNotFoundException,
  IncorrectPasswordException,
  AlreadyRegisterUserException,
} from './exception';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOne(email);

    if (!user) {
      throw new UserNotFoundException();
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      throw new IncorrectPasswordException();
    }

    const accessToken = this.jwtService.sign({ email: user.email });

    return {
      accessToken,
    };
  }

  async register(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;

    const user = await this.userService.findOne(email);

    if (user) {
      throw new AlreadyRegisterUserException();
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User();
    newUser.email = email;
    newUser.name = name;
    newUser.password = hashedPassword;

    // TODO user 생성 안되었을때호출.
    const savedUser = await this.userService.create(newUser);
    const accessToken = this.jwtService.sign({ email: savedUser.email });

    return {
      accessToken,
    };
  }

  async verifyUserJwtToken(token: string) {
    const { email } = this.jwtService.verify(token);
    return await this.userService.findOne(email);
  }
}
