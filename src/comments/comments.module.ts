/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CommentAnimeEntity,
  CommentAnimeSchema,
} from './infraestructure/persistence/CommentAnimeEntity';
import {
  CommentEpisodeEntity,
  CommentEpisodeSchema,
} from './infraestructure/persistence/CommentEpisodeEntity';
import { CommentsController } from './interfaces/rest/comments/comments.controller';
import { CommentsRepository } from './infraestructure/repositories/CommentsRepository';
import { ICommentsRepository } from './domain/repositories/ICommentsRepository';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentAnimeEntity.name, schema: CommentAnimeSchema },
      { name: CommentEpisodeEntity.name, schema: CommentEpisodeSchema },
    ]),
    CqrsModule
  ],
  controllers: [CommentsController],
  providers: [
    {
      provide: ICommentsRepository, useClass: CommentsRepository
    }
  ],
})
export class CommentsModule {}
