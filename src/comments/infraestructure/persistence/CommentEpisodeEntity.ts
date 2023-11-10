/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommentEntity } from '../values/Comment';
import mongoose, { HydratedDocument } from 'mongoose';
import { EpisodeEntity } from 'src/anime/infraestructure/persitence/entities/EpisodeEntity';

export type CommentEpisodeDocument = HydratedDocument<CommentEpisodeEntity>;

@Schema({ timestamps: true, collection: 'commentEpisode' })
export class CommentEpisodeEntity extends CommentEntity {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: EpisodeEntity.name })
  episode: Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CommentEpisodeEntity.name,
  })
  parentComment: Types.ObjectId;
}
export const CommentEpisodeSchema = SchemaFactory.createForClass(CommentEntity);
