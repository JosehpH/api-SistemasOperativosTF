/* eslint-disable prettier/prettier */
import { NotificationsModule } from './../notifications/notifications.module';
import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';
import { CommentsPostService } from './services/comments-post/comments-post.service';
import { CommentsPostController } from './controllers/comments-post/comments-post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentPost, CommentPostSchema } from './repositories/CommentPost';
import { Post, PostSchema } from './repositories/Post';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: CommentPost.name, schema: CommentPostSchema },
    ]),
    NotificationsModule,
    AuthModule,
  ],
  controllers: [PostsController, CommentsPostController],
  providers: [PostsService, CommentsPostService],
})
export class PostsModule {}
