/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEpisodesByAnimeIdQuery } from '../../messages/queries/GetEpisodesByAnimeIdQuery';
import { IEpisodeRepository } from 'src/anime/domain/repositories/IEpisodeRepository';
import { Inject } from '@nestjs/common';

@QueryHandler(GetEpisodesByAnimeIdQuery)
export class GetEpisodeByAnimeIdQueryHandler
  implements IQueryHandler<GetEpisodesByAnimeIdQuery>
{
  constructor(
    @Inject(IEpisodeRepository) private episodeRepository: IEpisodeRepository,
  ) {}

  async execute(query: GetEpisodesByAnimeIdQuery) {
    return this.episodeRepository.getEpisodesByAnimeId(query.animeId);
  }
}
