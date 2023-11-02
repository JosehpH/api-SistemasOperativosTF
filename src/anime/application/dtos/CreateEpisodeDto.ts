/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreateEpisodeDto {
  @ApiProperty({ required: true })
  public title: string;
  @ApiProperty({ required: true })
  public image: string;
  @ApiProperty({ required: true })
  public number: number;
  @ApiProperty({ required: true })
  public video: string;
  @ApiProperty({ required: true })
  public animeId: string;
}