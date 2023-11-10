/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUsersByAnimeId } from "../../messages/queries/GetUsersByAnimeId";
import { Inject } from "@nestjs/common";
import { IAnimeFollowedsRepository } from "src/user/domain/repositories/IAnimeFollowedsRepository";
import { AnimeFollowedEntity } from "src/user/infraestructure/persistence/AnimeFollowedEntity";
@QueryHandler(GetUsersByAnimeId)
export class GetUsersByAnimeIdQueryHandler
  implements IQueryHandler<GetUsersByAnimeId>
{
  constructor(
    @Inject(IAnimeFollowedsRepository)
    private repository: IAnimeFollowedsRepository,
  ) {}
   async execute(query: GetUsersByAnimeId){
    return await this.repository.getUsersByAnimeId(query.animeId);
  }
}