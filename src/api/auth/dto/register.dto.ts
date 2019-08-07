import { IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  @IsString()
  public readonly name: string;
}
