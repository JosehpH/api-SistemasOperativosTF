/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { StateAnime } from '../../../../shared/model/values/StateAnime';
import { CategoriesAnime } from '../../../../shared/model/values/CategoriesAnime';
import { AnimeEntity } from './AnimeEntity';
import mongoose, { HydratedDocument } from 'mongoose';

export type AnimeProfileDocument = HydratedDocument<AnimeProfileEntity>;

@Schema({collection: "animeProfile"})
export class AnimeProfileEntity {
    @Prop({required: true, type: String,enum:StateAnime})
    public stateAnime: StateAnime;
    @Prop({required: true, type: Number, default: 0})
    public visits: number;
    
    @Prop({required: true, type: [String], enum:CategoriesAnime})
    public categories: CategoriesAnime[];
    
    @Prop({type: mongoose.Schema.Types.ObjectId,ref: AnimeEntity.name})
    public anime:AnimeEntity
}

export const AnimeProfileSchema = SchemaFactory.createForClass(AnimeProfileEntity);