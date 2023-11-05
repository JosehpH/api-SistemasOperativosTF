/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ModelBase } from 'src/shared/entity/ModelBase';

export type UserDocument = HydratedDocument<UserEntity>;

@Injectable()
@Schema({collection: "users"})
export class UserEntity extends ModelBase {
  @Prop({required: true, unique: true,type: String})
  public email: string;
  @Prop({required: true, type: String})
  public password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
