/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommentEntity } from '../values/Comment';
import mongoose, { HydratedDocument } from 'mongoose';
import { EpisodeEntity } from 'src/anime/infraestructure/persitence/entities/EpisodeEntity';

export type CommentAnimeDocument = HydratedDocument<CommentAnimeEntity>;

@Schema({ timestamps: true, collection: 'commentAnime' })
export class CommentAnimeEntity extends CommentEntity {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: EpisodeEntity.name })
  anime: EpisodeEntity;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CommentAnimeEntity.name })
  parentComment: CommentAnimeEntity;
}
export const CommentAnimeSchema = SchemaFactory.createForClass(CommentAnimeEntity);

