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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CommentAnimeEntity.name, schema: CommentAnimeSchema },
      { name: CommentEpisodeEntity.name, schema: CommentEpisodeSchema },
    ]),
  ],
  controllers: [CommentsController],
  providers: [],
})
export class CommentsModule {}
