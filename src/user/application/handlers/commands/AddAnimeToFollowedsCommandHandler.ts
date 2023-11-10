/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddAnimeToFollowed } from "../../messages/commands/AddAnimeToFolloweds";
import { IAnimeFollowedsRepository } from "src/user/domain/repositories/IAnimeFollowedsRepository";
import { Inject } from "@nestjs/common";

@CommandHandler(AddAnimeToFollowed)
export class AddAnimeToFollowedsCommandHandler
  implements ICommandHandler<AddAnimeToFollowed>
{
  constructor(
    @Inject(IAnimeFollowedsRepository)
    private repository: IAnimeFollowedsRepository,
  ) {}
    execute(command: AddAnimeToFollowed) {
        const { animeId, userId } = command;
        return this.repository.addAnimeToFolloweds(animeId, userId);
  }
}