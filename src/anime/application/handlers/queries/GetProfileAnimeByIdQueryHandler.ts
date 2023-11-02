/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IAnimeProfileRepository } from 'src/anime/domain/repositories/IAnimeProfileRepository';
import { GetProfileAnimeByIdQuery } from '../../messages/queries/GetProfileAnimeById';

@QueryHandler(GetProfileAnimeByIdQuery)
export class GetProfileAnimeByIdQueryHandler
  implements IQueryHandler<GetProfileAnimeByIdQuery>
{
  constructor(
    @Inject(IAnimeProfileRepository)
    private animeProfileRepository: IAnimeProfileRepository,
  ) {}

  async execute(query: GetProfileAnimeByIdQuery){
        return this.animeProfileRepository.getProfileAnimeByAnimeId(query.animeId);
  }
}
