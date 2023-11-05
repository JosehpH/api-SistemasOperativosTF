/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReportsDocument = HydratedDocument<ReportsEntity>;

@Schema({timestamps: true,collection: 'reports'})
export class ReportsEntity{
    _id: string;
    userId: string;
    animeId: string;
    reason: string;
    status: string;
}
export const ReportsSchema = SchemaFactory.createForClass(ReportsEntity);