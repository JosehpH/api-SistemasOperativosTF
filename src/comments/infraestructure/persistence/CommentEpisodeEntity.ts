/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CommentEntity } from "../values/Comment";
import { AnimeEntity } from "src/anime/infraestructure/persitence/entities/AnimeEntity";
import mongoose, { HydratedDocument } from "mongoose";

export type CommentEpisodeDocument = HydratedDocument<CommentEpisodeEntity>;

@Schema({ timestamps: true, collection: 'commentEpisode' })
export class CommentEpisodeEntity extends CommentEntity {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AnimeEntity.name })
  anime: AnimeEntity;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CommentEpisodeEntity.name,
  })
  parentComment: CommentEpisodeEntity;
}
export const CommentEpisodeSchema = SchemaFactory.createForClass(CommentEntity);