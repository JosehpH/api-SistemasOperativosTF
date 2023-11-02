/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAnimeByIdQuery } from '../../messages/queries/GetAnimeByIdQuery';
import { IAnimeRepository, IAnimeRespository } from 'src/anime/domain/repositories/IAnimeRepository';
import { Inject } from '@nestjs/common';

@QueryHandler(GetAnimeByIdQuery)
export class GetAnimeByIdQueryHandler
  implements IQueryHandler<GetAnimeByIdQuery>
{
  constructor(
    @Inject(IAnimeRepository) private animeRepository: IAnimeRespository,
  ) {}

  async execute(query: GetAnimeByIdQuery): Promise<any> {
    return this.animeRepository.getAnimeById(query.id);
  }
}
