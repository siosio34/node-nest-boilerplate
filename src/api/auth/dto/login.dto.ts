import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
