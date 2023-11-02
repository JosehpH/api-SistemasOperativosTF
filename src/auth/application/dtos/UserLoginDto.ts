/* eslint-disable prettier/prettier */
import { IsStrongPassword } from 'class-validator';
import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Email is invalid' })
  email: string;

  @ApiProperty()
  @IsStrongPassword({}, { message: 'Password is invalid' })
  password: string;
}
