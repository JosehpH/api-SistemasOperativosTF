/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCommentsByAnimeId } from '../../messages/queries/GetCommentsByAnimeId';
import { GetCommentsByEpisodeId } from '../../messages/queries/GetCommentsByEpisodeId';
import { CreateAnimeComment } from '../../messages/commands/CreateAnimeComment';
import { CreateEpisodeComment } from '../../messages/commands/CreateEpisodeComment';

@Injectable()
export class CommentServiceService {
    constructor(private queryBus: QueryBus, private commandBus: CommandBus) { }
    async getCommentsByAnimeId(animeId: string) {
        const query = new GetCommentsByAnimeId(animeId);
        return await this.queryBus.execute(query);
    }
    async getCommentsByEpisodeId(episodeId: string) {
        const query = new GetCommentsByEpisodeId(episodeId);
        return await this.queryBus.execute(query);
    }
    async createCommentForAnime(comment: any) { 
        const command = new CreateAnimeComment(
            comment.animeId,
            comment.comment,
            comment.userId,
            comment.media,
            comment.parentId
        );
        return await this.commandBus.execute(command);
    }
    async createCommentForEpisode(comment: any) {
        const command = new CreateEpisodeComment(
            comment.episodeId,
            comment.comment,
            comment.userId,
            comment.media,
            comment.parentId
        );
        return await this.commandBus.execute(command);
    }
}
