import { SchemaFactory } from '@nestjs/mongoose';
/* eslint-disable prettier/prettier */

import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";
import { CommentPost } from "./CommentPost";

export type PostDocument = HydratedDocument<Post>;

@Schema({timestamps: true, collection: 'posts'})
export class Post{
    @Prop({type: String, required: true})
    content: string;
    @Prop({type: String})
    urlResource?: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: UserEntity.name})
    userId: Types.ObjectId;    
    @Prop({type: [mongoose.Schema.Types.ObjectId], ref: UserEntity.name})
    comments: CommentPost[];
    
    @Prop({type: [mongoose.Schema.Types.ObjectId], ref: UserEntity.name})
    likes: UserEntity[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: UserEntity.name })
    dislikes: UserEntity[];
}

export const PostSchema = SchemaFactory.createForClass(Post);