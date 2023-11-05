/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class RemoveAnimeListReproductionDto {
  @ApiProperty({ type: String, required: true })
  animeId: string;
  @ApiProperty({ type: String, required: true })
  listReproductionId: string;
  @ApiProperty({ type: String, required: true })
  userId: string;
}