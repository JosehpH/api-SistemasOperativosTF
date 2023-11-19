/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export type CommentPostDocument = HydratedDocument<CommentPost> ;

@Schema({timestamps: true, collection: 'commentsPost'})
export class CommentPost{
    @Prop({type: String, required: true})
    content: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, required: true, ref: UserEntity.name})
    userId: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, required: true, ref:CommentPost.name})
    postId: Types.ObjectId;
    @Prop({type: String})
    resourceUrl: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId}], ref: UserEntity.name})
    likes: UserEntity[];
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: UserEntity.name })
    dislikes: UserEntity[];
}

export const CommentPostSchema = SchemaFactory.createForClass(CommentPost);