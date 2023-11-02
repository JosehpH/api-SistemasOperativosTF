/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ModelBase } from "src/shared/model/entity/ModelBase";
import { HydratedDocument } from 'mongoose';

export type AnimeDocument = HydratedDocument<AnimeEntity>;

@Schema({collection: "animes"})
export class AnimeEntity extends ModelBase{
    @Prop({required: true,type: String})
    public title: string;
    @Prop({required: true, type: String})
    public sinopsis: string;
    @Prop({required: true, type: Date})
    public publicationDate: Date;
    @Prop({required: true, type: String})
    public image: string;
}

export const AnimeSchema = SchemaFactory.createForClass(AnimeEntity);