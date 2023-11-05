/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveAnimeFromFavorites } from "../../messages/commands/RemoveAnimeFromFavorites";
import { IAnimeFavoritesRepository } from "src/user/domain/repositories/IAnimeFavoritesRepository";
import { Inject } from "@nestjs/common";

@CommandHandler(RemoveAnimeFromFavorites)
export class RemoveAnimeFromFavoritesComandHandler
  implements ICommandHandler<RemoveAnimeFromFavorites>
{
  constructor(
    @Inject(IAnimeFavoritesRepository)
    private repository: IAnimeFavoritesRepository,
  ) {}
  execute(command: RemoveAnimeFromFavorites){
    const { userId, animeId } = command;
    return this.repository.removeAnimeFromFavorites(animeId,userId);
  }
}