import { CommentServiceService } from './../../../application/services/comment-service/comment-service.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCommentAnimeDto } from 'src/comments/application/dtos/CreateCommentAnimeDto';

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {
  constructor(private commentsService: CommentServiceService) {}
  @Get('/:episodeId')
  @ApiOperation({ summary: 'Get comments by episode id' })
  async getCommentsByEpisodeId(@Param('episodeId') episodeId: string) {
    return await this.commentsService.getCommentsByEpisodeId(episodeId);
  }
  @Get('/:animeId')
  @ApiOperation({ summary: 'Get comments by anime id' })
  async getCommentsByAnimeId(@Param('animeId') animeId: string) {
    return await this.commentsService.getCommentsByAnimeId(animeId);
  }
  @Post('/anime')
  @ApiOperation({ summary: 'Create comment' })
  async createComment(@Body() comment: CreateCommentAnimeDto) {
    return await this.commentsService.createCommentForAnime(comment);
  }
  @Post('/episode')
  @ApiOperation({ summary: 'Create comment' })
  async createCommentEpisode(@Body() comment: CreateCommentAnimeDto) {
    return await this.commentsService.createCommentForEpisode(comment);
  }
}
