/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ModelBase } from 'src/shared/model/entity/ModelBase';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema({collection: "users"})
export class UserEntity extends ModelBase {
  @Prop({required: true, unique: true,type: String})
  public email: string;
  @Prop({required: true, type: String})
  public password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
