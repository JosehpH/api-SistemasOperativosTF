/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Mongoose } from "mongoose";
import { AnimeEntity } from "./AnimeEntity";

export type EpisodeDocument = HydratedDocument<EpisodeEntity>;

@Schema({ collection: 'episodes' })
export class EpisodeEntity {
  @Prop({ type: String})
  public title: string;
  @Prop({ type: Number})
  public number: number;
  @Prop({ type: String})
  public video: string;
  @Prop({ type: String})
  public image: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AnimeEntity.name})
  public anime: AnimeEntity;
}
export const EpisodeSchema = SchemaFactory.createForClass(EpisodeEntity);