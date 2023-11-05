/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
export class CreateUserProfileDto {
  @ApiProperty({ type: String, required: true })
  name: string;
  @ApiProperty({ type: String, required: true })
  lastname: string;
  @ApiProperty({ type: Number, required: true })
  age: number;
  @ApiProperty({ type: String, required: true })
  image: string;
  @ApiProperty({ type: String, required: true })
  userId: string;
}