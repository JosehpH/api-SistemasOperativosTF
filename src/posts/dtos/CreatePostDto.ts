/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { Binary } from "mongodb";
export class CreatePostDto{
    @ApiProperty({example: 'Post content', description: 'Post title'})
    content: string;
    @ApiProperty({description: 'Post resource'})
    Resource: Express.Multer.File;
    @ApiProperty({type:String, description: 'Post title'})
    userId: string;
}