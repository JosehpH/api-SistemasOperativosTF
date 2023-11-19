/* eslint-disable prettier/prettier */
import { Logger, Param, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from 'src/posts/dtos/CreatePostDto';
import { PostsService } from 'src/posts/services/posts/posts.service';
import { Express } from 'express';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';


@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('Resource'))
  //@UseGuards(AuthGuard)
  createPost(
    @UploadedFile() file: Express.Multer.File,
    @Body() postDto: CreatePostDto,
  ) {
    postDto.Resource = file;
    return this.postService.createPost(postDto);
  }

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }
  @Put('/likes/:postId/:userId')
  updateLikesPost(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    return this.postService.updateLikesPost(postId, userId);
  }
  @Put('/dislikes/:postId/:userId')
  updateDislikesPost(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    return this.postService.updateDislikesPost(postId, userId);
  }
  @Put('/likes/remove/:postId/:userId')
  removeLikesPost(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    return this.postService.removeLikesPost(postId, userId);
  }
  @Put('/dislikes/remove/:postId/:userId')
  removeDislikesPost(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    return this.postService.removeDislikesPost(postId, userId);
  }
}


