/* eslint-disable prettier/prettier */
import { Prop } from "@nestjs/mongoose";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export class CommentEntity {
    @Prop({type: UserEntity, required: true})
    user: UserEntity
    @Prop({type: String, required: true})
    text: string;
    @Prop({type: String})
    media: string;
    @Prop({type: Number, default: 0})
    likes: number;
    @Prop({type: Number, default: 0})
    dislikes: number;
}