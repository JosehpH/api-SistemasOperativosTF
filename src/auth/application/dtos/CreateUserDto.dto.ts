/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: 'herrera@gmail.com' })
    @IsEmail({}, { message: 'Email is invalid' })
    @Length(10, 30, { message: 'Email must be between 4 and 20 characters' })
    email: string;

    @ApiProperty({ example: 'abcd@*1564' })
    @IsStrongPassword({}, { message: 'Password is invalid' })
    password: string;

    @ApiProperty({ example: 'Josehp' })
    first_name: string;

    @ApiProperty({example: 'Herrera'})
    last_name: string;

    @ApiProperty({})
    avatar: Express.Multer.File;
}