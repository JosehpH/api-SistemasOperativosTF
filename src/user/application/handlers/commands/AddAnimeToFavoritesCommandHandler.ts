/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddAnimeToFavorites } from "../../messages/commands/AddAnimeToFavorites";
import { Inject } from "@nestjs/common";
import { IAnimeFavoritesRepository } from "src/user/domain/repositories/IAnimeFavoritesRepository";

@CommandHandler(AddAnimeToFavorites)
export class AddAnimeToFavoritesCommandHandler
  implements ICommandHandler<AddAnimeToFavorites>
{
  constructor(
    @Inject(IAnimeFavoritesRepository)
    private repository: IAnimeFavoritesRepository,
  ) {}
  execute(command: AddAnimeToFavorites){
      const { userId, animeId } = command;
      return this.repository.addAnimeToFavorites(animeId, userId);
  }
}