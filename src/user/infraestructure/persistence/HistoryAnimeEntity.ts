/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Anime } from "src/anime/domain/aggregates/Anime";
import { AnimeEntity } from "src/anime/infraestructure/persitence/entities/AnimeEntity";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export type HistoryAnimeDocument = HydratedDocument<HistoryAnimeEntity>; 

@Schema({ timestamps: true, collection: 'historyAnime' })
export class HistoryAnimeEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AnimeEntity.name,
    required: true,
  })
  anime: Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserEntity.name,
    required: true,
  })
  user: Types.ObjectId;
}
export const HistoryAnimeSchema = SchemaFactory.createForClass(HistoryAnimeEntity);