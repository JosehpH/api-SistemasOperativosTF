/* eslint-disable prettier/prettier */
import { Prop } from '@nestjs/mongoose';

export class ModelBase{
  @Prop({ default: Date.now, type: Date, required: false})
  public createdAt: Date;
  @Prop({default: Date.now, required: false, type: Date})
  public updatedAt: Date;
}
