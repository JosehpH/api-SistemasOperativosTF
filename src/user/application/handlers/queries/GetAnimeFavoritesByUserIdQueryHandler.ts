/* eslint-disable prettier/prettier */
import {  IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAnimeFavoritesByUserId } from "../../messages/queries/GetAnimeFavoritesByUserId";
import { Inject } from "@nestjs/common";
import { IAnimeFavoritesRepository } from "src/user/domain/repositories/IAnimeFavoritesRepository";

@QueryHandler(GetAnimeFavoritesByUserId)
export class GetAnimeFavoritesByUserIdQueryHandler
  implements IQueryHandler<GetAnimeFavoritesByUserId>
{
  constructor(
    @Inject(IAnimeFavoritesRepository)
    private repository: IAnimeFavoritesRepository,
  ) {}
  execute(command: GetAnimeFavoritesByUserId){
    const { userId } = command;
    return this.repository.getAllAnimesByUserId(userId);
  }
}