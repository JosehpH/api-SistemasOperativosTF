/* eslint-disable prettier/prettier */
import { ModelBase } from "src/shared/model/entity/ModelBase";
import { Prop,SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type ProfileDocument = HydratedDocument<Profile>;

export class Profile extends ModelBase {
  @Prop()
  public firstName: string;
  @Prop()
  public lastName: string;
  @Prop()
  public bio: string;
  @Prop()
  public avatar: string;
  @Prop()
   public userId: number;  
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);