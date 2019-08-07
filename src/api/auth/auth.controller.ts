import { Controller, Request, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  public async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('test')
  public async test(@Request() req, loginDto: LoginDto) {
    console.log('test', req.user);
  }
}
