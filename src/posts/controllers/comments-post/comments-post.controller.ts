/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { CreateCommentPostDto } from 'src/posts/dtos/CreateCommentPostDto';
import { CommentsPostService } from 'src/posts/services/comments-post/comments-post.service';

@Controller('comments-post')
@ApiTags('Comments Post')
export class CommentsPostController {
  constructor(private commentService: CommentsPostService) {}
  @Post()
  @UseInterceptors(FileInterceptor('resource'))
  //@UseGuards(AuthGuard)
  createComment(@UploadedFile() file: Express.Multer.File, @Body() commentDto: CreateCommentPostDto) {
    commentDto.resource = file;
    return this.commentService.createComment(commentDto);
  }
  @Get('/:postId')
  getComments(@Param('postId') postId: string) {
    return this.commentService.getComments(postId);
  }

  @Put('/likes/:commentId/:userId')
  updateLikesComment(
    @Param('commentId') commentId: string,
    @Param('userId') userId: string,
  ) {
    return this.commentService.updateLikesComment(commentId, userId);
  }
  @Put('/dislikes/:commentId/:userId')
  updateDislikesComment(
    @Param('commentId') commentId: string,
    @Param('userId') userId: string,
  ) {
    return this.commentService.updateDislikesComment(commentId, userId);
  }
  @Put('/likes/remove/:commentId/:userId')
  removeLikesComment(
    @Param('commentId') commentId: string,
    @Param('userId') userId: string,
  ) {
    return this.commentService.removeLikesComment(commentId, userId);
  }
  @Put('/dislikes/remove/:commentId/:userId')
  removeDislikesComment(
    @Param('commentId') commentId: string,
    @Param('userId') userId: string,
  ) {
    return this.commentService.removeDislikesComment(commentId, userId);
  }
}
