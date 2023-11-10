/* eslint-disable prettier/prettier */
import { ICommentsRepository } from 'src/comments/domain/repositories/ICommentsRepository';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAnimeComment } from './../../messages/commands/CreateAnimeComment';
import { Inject } from '@nestjs/common';
import { CommentAnime } from 'src/comments/domain/aggregates/CommentAnime';

@CommandHandler(CreateAnimeComment)
export class CreateAnimeCommentCommandHandler implements ICommandHandler<CreateAnimeComment>{
    constructor(@Inject(ICommentsRepository) private commentsRepository: ICommentsRepository){}
    async execute(command: CreateAnimeComment){
        const comment = new CommentAnime();
        comment.animeId = command.animeId;
        comment.text = command.comment;
        comment.userId = command.userId;
        comment.likes = 0;
        comment.dislikes = 0;
        comment.media = command.media;
        comment.parentId = command.parentId;
        return this.commentsRepository.createCommentForAnime(comment);
    }
}