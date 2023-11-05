/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddAnimeToListReproduction } from "../../messages/commands/AddAnimeToListReproduction";
import { IAnimeAndListReproductionRepository } from "src/user/domain/repositories/IAnimeAndListReproductionRepository";
import { Inject } from "@nestjs/common";

@CommandHandler(AddAnimeToListReproduction)
export class AddAnimeToListReproductionCommandHandler
  implements ICommandHandler<AddAnimeToListReproduction>
{
  constructor(
    @Inject(IAnimeAndListReproductionRepository)
    private repository: IAnimeAndListReproductionRepository,
  ) {}
  execute(command: AddAnimeToListReproduction) {
    const {animeId, listReproductionId } = command;
    return this.repository.addAnimeToListRepository(animeId, listReproductionId);
  }
}