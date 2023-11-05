import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {
  @Get('/:episodeId')
  @ApiOperation({ summary: 'Get comments by episode id' })
  async getCommentsByEpisodeId() {
    return null;
  }
  @Get('/:animeId')
  @ApiOperation({ summary: 'Get comments by anime id' })
  async getCommentsByAnimeId() {
    return null;
  }
  @Post()
  @ApiOperation({ summary: 'Create comment' })
  async createComment() {
    return null;
  }
}
