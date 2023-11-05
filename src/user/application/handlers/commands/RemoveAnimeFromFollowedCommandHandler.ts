/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveAnimeFromFollowed } from "../../messages/commands/RemoveAnimeFromFollowed";
import { IAnimeFollowedsRepository } from "src/user/domain/repositories/IAnimeFollowedsRepository";
import { Inject } from "@nestjs/common";

@CommandHandler(RemoveAnimeFromFollowed)
export class RemoveAnimeFromFollowedCommandHandler
  implements ICommandHandler<RemoveAnimeFromFollowed>
{
  constructor(
    @Inject(IAnimeFollowedsRepository)
    private repository: IAnimeFollowedsRepository,
  ) {}
  execute(command: RemoveAnimeFromFollowed){
    const { userId, animeId } = command;
    return this.repository.removeAnimeFromFolloweds(animeId,userId);
  }
}