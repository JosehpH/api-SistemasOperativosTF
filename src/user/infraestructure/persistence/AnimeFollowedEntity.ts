/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { AnimeEntity } from "src/anime/infraestructure/persitence/entities/AnimeEntity";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export type AnimeFollowedDocument = HydratedDocument<AnimeFollowedEntity>;

@Schema({ timestamps: true, collection: 'animeFollowed' })
export class AnimeFollowedEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserEntity.name,
    required: true,
  })
  user: Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AnimeEntity.name,
    required: true,
  })
  anime: Types.ObjectId;
}
export const AnimeFollowedSchema = SchemaFactory.createForClass(AnimeFollowedEntity);