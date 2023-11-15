/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ReportType } from './ReportType';
import { User } from 'src/auth/domain/aggregates/User';
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';

export type ReportsDocument = HydratedDocument<ReportsEntity>;

@Schema({timestamps: true,collection: 'reports'})
export class ReportsEntity{
    @Prop({required: true, type: Types.ObjectId, ref: UserEntity.name})
    userId: Types.ObjectId;

    @Prop({required: true, type: Types.ObjectId, refPath: 'reportType'})
    resourceId: Types.ObjectId;
    @Prop({required: true, enum: ReportType})
    reportType: ReportType;
    @Prop({required: true})
    reason: string;
}
export const ReportsSchema = SchemaFactory.createForClass(ReportsEntity);