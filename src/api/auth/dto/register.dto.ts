import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  @IsString()
  @IsNotEmpty({ message: '비어있으면 다메다메' })
  public readonly name: string;
}
