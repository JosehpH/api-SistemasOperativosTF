/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEpisodeByIdQuery } from '../../messages/queries/GetEpisodeByIdQuery';
import { Inject } from '@nestjs/common';
import { IEpisodeRepository } from 'src/anime/domain/repositories/IEpisodeRepository';

@QueryHandler(GetEpisodeByIdQuery)
export class GetEpisodeByIdQueryHandler implements IQueryHandler<GetEpisodeByIdQuery> {
    constructor(@Inject(IEpisodeRepository) private episodeRepository: IEpisodeRepository,) {}
    async execute(query) {
        return this.episodeRepository.getEpisode(query.id);
     }
}