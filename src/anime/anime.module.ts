import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AnimeEntity,
  AnimeSchema,
} from './infraestructure/persitence/entities/AnimeEntity';
import {
  AnimeProfileEntity,
  AnimeProfileSchema,
} from './infraestructure/persitence/entities/AnimeProfileEnity';
import {
  EpisodeEntity,
  EpisodeSchema,
} from './infraestructure/persitence/entities/EpisodeEntity';
import { AnimeRepository } from './infraestructure/persitence/repositories/AnimeRespository';
import { AnimeProfileRepository } from './infraestructure/persitence/repositories/AnimeProfileRepository';
import { EpisodeRepository } from './infraestructure/persitence/repositories/EpisodeRepository';
import { IAnimeRepository } from './domain/repositories/IAnimeRepository';
import { IAnimeProfileRepository } from './domain/repositories/IAnimeProfileRepository';
import { IEpisodeRepository } from './domain/repositories/IEpisodeRepository';
import { GetAnimeByIdQueryHandler } from './application/handlers/queries/GetAnimeByIdQueryHandler';
import { GetProfileAnimeByIdQueryHandler } from './application/handlers/queries/GetProfileAnimeByIdQueryHandler';
import { GetEpisodeByAnimeIdQueryHandler } from './application/handlers/queries/GetEpisodesByAnimeIdQueryHandler';
import { GetAnimesQueryHandler } from './application/handlers/queries/GetAnimesQueryHandler';
import { CreateAnimeCommandHandler } from './application/handlers/commands/CreateAnimeCommandHandler';
import { CreateEpisodeCommandHandler } from './application/handlers/commands/CreateEpisodeCommandHandler';
import { CreateProfileAnimeCommandHandler } from './application/handlers/commands/CreateProfileAnimeCommandHandler';
import { EpisodeAddedEventHandler } from './application/handlers/events/EpisodeAddedEventHandler';
import { AnimeController } from './interfaces/rest/anime/anime.controller';
import { AnimeProfileController } from './interfaces/rest/anime-profile/anime-profile.controller';
import { EpisodeController } from './interfaces/rest/episode/episode.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AnimeService } from './application/services/anime/anime.service';
import { EpisodeService } from './application/services/episode/episode.service';
import { AnimeProfileService } from './application/services/anime-profile/anime-profile.service';

const QueriesHandlers = [
  GetAnimeByIdQueryHandler,
  GetAnimesQueryHandler,
  GetEpisodeByAnimeIdQueryHandler,
  GetEpisodeByAnimeIdQueryHandler,
  GetProfileAnimeByIdQueryHandler,
];
const CommandsHandlers = [
  CreateAnimeCommandHandler,
  CreateEpisodeCommandHandler,
  CreateProfileAnimeCommandHandler,
];
const EventHandlers = [EpisodeAddedEventHandler];
const Services = [AnimeService, EpisodeService, AnimeProfileService];
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnimeEntity.name, schema: AnimeSchema },
      { name: AnimeProfileEntity.name, schema: AnimeProfileSchema },
      { name: EpisodeEntity.name, schema: EpisodeSchema },
    ]),
    CqrsModule,
  ],
  controllers: [AnimeController, AnimeProfileController, EpisodeController],
  providers: [
    { provide: IAnimeRepository, useClass: AnimeRepository },
    { provide: IAnimeProfileRepository, useClass: AnimeProfileRepository },
    { provide: IEpisodeRepository, useClass: EpisodeRepository },
    ...QueriesHandlers,
    ...CommandsHandlers,
    ...EventHandlers,
    ...Services,
  ],
})
export class AnimeModule {}
