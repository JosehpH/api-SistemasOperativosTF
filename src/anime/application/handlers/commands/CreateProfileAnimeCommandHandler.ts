import { Logger } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProfileAnime } from "src/anime/domain/aggregates/AnimeProfile";
import { IAnimeProfileRepository } from "src/anime/domain/repositories/IAnimeProfileRepository";
import { CreateProfileAnimeCommand } from "../../messages/commands/CreateProfileAnimeCommand";

@CommandHandler(CreateProfileAnimeCommand)
export class CreateProfileAnimeCommandHandler
  implements ICommandHandler<CreateProfileAnimeCommand>
{
  constructor(
    @Inject(IAnimeProfileRepository)
    private animeProfileRepository: IAnimeProfileRepository,
    ) { }
    
  async execute(command: CreateProfileAnimeCommand) {
    const profileAnime: ProfileAnime = new ProfileAnime();
    profileAnime.animeId = command.animeId;
    profileAnime.visits = command.visits;
    profileAnime.state = command.state;
    profileAnime.categories = command.categories;
        return this.animeProfileRepository.createProfileAnime(profileAnime);
  }
}