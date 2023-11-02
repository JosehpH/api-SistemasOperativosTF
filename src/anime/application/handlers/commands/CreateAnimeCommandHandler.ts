/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAnimeCommand } from '../../messages/commands/CreateAnimeCommand';
import {
  IAnimeRepository,
  IAnimeRespository,
} from 'src/anime/domain/repositories/IAnimeRepository';
import { AnimeRepository } from 'src/anime/infraestructure/persitence/repositories/AnimeRespository';
import { Inject } from '@nestjs/common';
import { Anime } from 'src/anime/domain/aggregates/Anime';

@CommandHandler(CreateAnimeCommand)
export class CreateAnimeCommandHandler
  implements ICommandHandler<CreateAnimeCommand>
{
  constructor(@Inject(IAnimeRepository) private animeRepository: IAnimeRespository) {}
    async execute(command: CreateAnimeCommand) {
        const anime = new Anime();
        anime.title = command.title;
        anime.description = command.sinopsis;
        anime.image = command.image;
        anime.publicationDate = command.publicationDate;
        return this.animeRepository.createAnime(anime);
  }
}
