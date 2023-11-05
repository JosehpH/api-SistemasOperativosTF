/* eslint-disable prettier/prettier */

import  mongoose, {HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';


export type ListReproductionDocument = HydratedDocument<ListReproductionEntity>;

@Schema({ timestamps: true, collection: 'listReproduction' })
export class ListReproductionEntity {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  description: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserEntity.name,
    required: true,
  })
  user: Types.ObjectId;
}
export const ListReproductionSchema = SchemaFactory.createForClass(ListReproductionEntity);
