/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NotificationDocument = HydratedDocument<NotificationEntity>;
@Schema({timestamps: true,collection: 'notifications'})
export class NotificationEntity{
    userId: string;
    message: string;
    status: string;
    type: string;
    url: string;
}
export const NotificationSchema = SchemaFactory.createForClass(NotificationEntity);