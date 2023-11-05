/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
export class UserActivityDto {
  @ApiProperty({ type: String, required: true })
  userId: string;
  @ApiProperty({ type: String, required: true })
  animeId: string;
}