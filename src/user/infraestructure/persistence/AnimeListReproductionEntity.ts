/* eslint-disable prettier/prettier */
import { AnimeEntity } from "src/anime/infraestructure/persitence/entities/AnimeEntity";
import { ListReproductionEntity } from "./ListReproductionEntity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type AnimeListReproductionDocument = HydratedDocument<AnimeListReproductionEntity>;

@Schema({ timestamps: true, collection: 'animeListReproduction' })
export class AnimeListReproductionEntity {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AnimeEntity.name,
    required: true,
  })
  anime: Types.ObjectId;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: ListReproductionEntity.name,
    required: true,
  })
  listReproduction: Types.ObjectId;
}
export const AnimeListReproductionSchema = SchemaFactory.createForClass(AnimeListReproductionEntity);