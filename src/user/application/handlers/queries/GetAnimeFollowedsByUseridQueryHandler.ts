/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAnimeFollowedsByUserId } from './../../messages/queries/GetAnimeFollowedsByUserId';
import { Inject } from '@nestjs/common';
import { IAnimeFollowedsRepository } from 'src/user/domain/repositories/IAnimeFollowedsRepository';

@QueryHandler(GetAnimeFollowedsByUserId)
export class GetAnimeFollowedsByUserIdQueryHandler
  implements IQueryHandler<GetAnimeFollowedsByUserId>
{
  constructor(
    @Inject(IAnimeFollowedsRepository)
    private repository: IAnimeFollowedsRepository,
  ) {}
  execute(query: GetAnimeFollowedsByUserId){
    const { userId } = query;
    return this.repository.getAllAnimesByUserId(userId);
  }
}