/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class CreateCommentpisodeDto {
  @ApiProperty()
  episodeId: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  media: string;
  @ApiProperty()
  @IsOptional()
  parentId: string;
}
