/* eslint-disable prettier/prettier */
import { CommentResponse } from "./CommentResponse";

export class PostResponse{
    id: string;
    content: string;
    urlResource: string;
    userId: string;
    likes: number;
    dislikes: number;
    comments: CommentResponse[];
    createAt: Date;
}