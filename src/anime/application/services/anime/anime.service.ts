/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAnimeCommand } from '../../messages/commands/CreateAnimeCommand';
import { CreateAnimeDto } from '../../dtos/CreateAnimeDto';
import { CreateProfileAnimeCommand } from '../../messages/commands/CreateProfileAnimeCommand';
import { GetAnimeByIdQuery } from '../../messages/queries/GetAnimeByIdQuery';
import { GetAnimesQuery } from '../../messages/queries/GetAnimesQuery';
import { Types } from 'mongoose';

@Injectable()
export class AnimeService {
  constructor(private commandBus: CommandBus, private QueryBus: QueryBus) {}
  async createAnime(anime: CreateAnimeDto) {
    const command: CreateAnimeCommand = new CreateAnimeCommand(
      anime.title,
      anime.descrption,
      anime.publicationDate,
      anime.image,
      anime.state,
    );
    const animeId = await this.commandBus.execute(command);
    const commandProfile: CreateProfileAnimeCommand =
      new CreateProfileAnimeCommand(
        animeId,
        anime.visits,
        anime.state,
        anime.categories,
      );
    await this.commandBus.execute(commandProfile);
    return animeId;
  }
  async getAnimeById(id: string) {
    const query: GetAnimeByIdQuery = new GetAnimeByIdQuery(id);
    return await this.QueryBus.execute(query);
  }
  async getAnimeByTitle(title: string) {
    const query: GetAnimeByIdQuery = new GetAnimeByIdQuery(title);
    return await this.QueryBus.execute(query);
  }
  async getAnimes() {
    const query: GetAnimesQuery = new GetAnimesQuery();
    return await this.QueryBus.execute(query);
  }
}
