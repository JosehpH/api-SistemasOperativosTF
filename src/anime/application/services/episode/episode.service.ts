import { GetEpisodesByAnimeIdQuery } from './../../messages/queries/GetEpisodesByAnimeIdQuery';
import { Get } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEpisodeDto } from '../../dtos/CreateEpisodeDto';
import { CreateEpisodeCommand } from '../../messages/commands/CreateEpisodeCommand';
import { GetEpisodeByIdQuery } from '../../messages/queries/GetEpisodeByIdQuery';
import { GetEpisodeByAnimeIdQueryHandler } from '../../handlers/queries/GetEpisodesByAnimeIdQueryHandler';

@Injectable()
export class EpisodeService {
    constructor(private commandBus: CommandBus, private QueryBus: QueryBus) { }
    async createEpisode(episode: CreateEpisodeDto) { 
        const command: CreateEpisodeCommand = new CreateEpisodeCommand(episode.title,episode.video,episode.image,episode.number,episode.animeId);
        return await this.commandBus.execute(command);
    }
    async getEpisodeById(id: string) { 
        const query: GetEpisodeByIdQuery = new GetEpisodeByIdQuery(id);
        return await this.QueryBus.execute(query);
    }
    async getEpisodesByAnimeId(animeId:string) { 
        const query: GetEpisodesByAnimeIdQuery =
            new GetEpisodesByAnimeIdQuery(animeId);
        return await this.QueryBus.execute(query);
    }
}
