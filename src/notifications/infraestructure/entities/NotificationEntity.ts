/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export type NotificationDocument = HydratedDocument<NotificationEntity>;

@Schema({collection: 'notifications', timestamps: true})
export class NotificationEntity{
    @Prop({type:mongoose.Schema.Types.ObjectId, ref: UserEntity.name})
    user: Types.ObjectId;
    @Prop({type: String, required: true})
    message: string;
    @Prop({type: String, default: false})
    read: boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(NotificationEntity);
