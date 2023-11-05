/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export type UserProfileDocument = HydratedDocument<UserProfileEntity>;
@Schema({ timestamps: true, collection: 'userProfile' })
export class UserProfileEntity {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  lastname: string;
  @Prop({ type: Number, required: true })
  age: number;
  @Prop({ type: String, required: true })
  image: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserEntity.name,
    required: true,
  })
  user: Types.ObjectId;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfileEntity);