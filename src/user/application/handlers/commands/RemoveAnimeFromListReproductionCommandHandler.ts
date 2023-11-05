/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveAnimeFromListReproduction } from "../../messages/commands/RemoveAnimeFromListReproduction";
import { Inject } from "@nestjs/common";
import { IAnimeAndListReproductionRepository } from "src/user/domain/repositories/IAnimeAndListReproductionRepository";

@CommandHandler(RemoveAnimeFromListReproduction)
export class RemoveAnimeFromListReproductionCommandHandler
  implements ICommandHandler<RemoveAnimeFromListReproduction>
{
  constructor(
    @Inject(IAnimeAndListReproductionRepository)
    private repository: IAnimeAndListReproductionRepository,
  ) {}
  execute(command: RemoveAnimeFromListReproduction){
    const {animeId, listReproductionId } = command;
    return this.repository.removeAnimeFromListRepository(animeId, listReproductionId);
  }
}