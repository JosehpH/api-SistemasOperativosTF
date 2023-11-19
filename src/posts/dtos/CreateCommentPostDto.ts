/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentPostDto {
  @ApiProperty({ type: String, description: 'Content of the comment' })
  content: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  resource: Express.Multer.File;
  @ApiProperty({ type: String, description: 'User id of the comment' })
  userId: string;
  @ApiProperty({ type: String, description: 'Post id of the comment' })
  postId: string;
}
