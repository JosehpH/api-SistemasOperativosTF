import { UserEntity } from './../auth/infraestructure/persitence/entities/UserEntity';
import { IAnimeFollowedsRepository } from 'src/user/domain/repositories/IAnimeFollowedsRepository';
import { IAnimeFavoritesRepository } from 'src/user/domain/repositories/IAnimeFavoritesRepository';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeFavoriteEntity, AnimeFavoriteSchema } from './infraestructure/persistence/AnimeFavoriteEntity';
import { AnimeFollowedEntity, AnimeFollowedSchema } from './infraestructure/persistence/AnimeFollowedEntity';
import { AnimeListReproductionEntity, AnimeListReproductionSchema } from './infraestructure/persistence/AnimeListReproductionEntity';
import { ListReproductionEntity, ListReproductionSchema } from './infraestructure/persistence/ListReproductionEntity';
import { UserProfileEntity } from './infraestructure/persistence/UserProfileEntity';
import { HistoryAnimeEntity, HistoryAnimeSchema } from './infraestructure/persistence/HistoryAnimeEntity';
import { AnimeFavoritesRepository } from './infraestructure/repositories/AnimeFavoritesRepository';
import { IAnimeAndListReproductionRepository } from './domain/repositories/IAnimeAndListReproductionRepository';
import { AnimeAndListReproductionRepository } from './infraestructure/repositories/AnimeAndListReproductionRepository';
import { AnimeFollowedsRepository } from './infraestructure/repositories/AnimeFollowedsRepository';
import { IHistoryAnimeRepository } from './domain/repositories/IHistoryAnimeRepository';
import { HistoryAnimeRepository } from './infraestructure/repositories/HistoryAnimeRepository';
import { IListReproductionRepository } from './domain/repositories/IListReproductionRepository';
import { IUserProfileRepository } from './domain/repositories/IUserProfileRepository';
import { UserProfileRepository } from './infraestructure/repositories/UserProfileRepository';
import { ListReproductionRepository } from './infraestructure/repositories/ListReproductionRepository';
import { AuthModule } from 'src/auth/auth.module';
import { AddAnimeToFavoritesCommandHandler } from './application/handlers/commands/AddAnimeToFavoritesCommandHandler';
import { AddAnimeToFollowedsCommandHandler } from './application/handlers/commands/AddAnimeToFollowedsCommandHandler';
import { AddAnimeToListReproductionCommandHandler } from './application/handlers/commands/AddAnimeToListReproductionCommandHandler';
import { AddAnimeToHistoryCommandHandler } from './application/handlers/commands/AddAnimeToHistoryCommandHandler';
import { CreateUserProfileByUserIdCommandHandler } from './application/handlers/commands/CreateUserProfileByUserIdCommandHandler';
import { CreateListReproductionCommandHandler } from './application/handlers/commands/CreateListReproductionCommandHandler';
import { RemoveAnimeFromFavoritesComandHandler } from './application/handlers/commands/RemoveAnimeFromFavoritesCommandHandler';
import { RemoveAnimeFromFollowedCommandHandler } from './application/handlers/commands/RemoveAnimeFromFollowedCommandHandler';
import { RemoveAnimeFromListReproductionCommandHandler } from './application/handlers/commands/RemoveAnimeFromListReproductionCommandHandler';
import { RemoveListReproductionCommandHandler } from './application/handlers/commands/RemoveListReproductionCommandHandler';
import { RemoveAnimeFromHistoryCommandHandler } from './application/handlers/commands/RemoveAnimeFromHistoryCommandHandler';
import e from 'express';
import { GetAllAnimesByListReproductionQueryHandler } from './application/handlers/queries/GetAllAnimesByListReproductionIdQueryHandler';
import { GetAllListReproductionByUserIdQueryHandler } from './application/handlers/queries/GetAllListReproductionByUserIdQueryHandler';
import { GetAnimeFavoritesByUserIdQueryHandler } from './application/handlers/queries/GetAnimeFavoritesByUserIdQueryHandler';
import { GetAnimeFollowedsByUserIdQueryHandler } from './application/handlers/queries/GetAnimeFollowedsByUseridQueryHandler';
import { GetHistoryAnimeByUserIdQueryHandler } from './application/handlers/queries/GetHistoryAnimeByUserIdQueryHandler';
import { GetUserProfileUserIdQueryHandler } from './application/handlers/queries/GetUserProfileByUserIdQuerHandler';
import { ListsReproductionAnimemController } from './intefaces/rest/lists-reproduction-animem/lists-reproduction-animem.controller';
import { HistoryAnimeController } from './intefaces/rest/history-anime/history-anime.controller';
import { FollowedAnimeController } from './intefaces/rest/followed-anime/followed-anime.controller';
import { FavoritesAnimeService } from './application/services/favorites-anime/favorites-anime.service';
import { FavoritesAnimmeController } from './intefaces/rest/favorites-animme/favorites-animme.controller';
import { HistoryAnimeService } from './application/services/history-anime/history-anime.service';
import { FollowedAnimeService } from './application/services/followed-anime/followed-anime.service';
import { ListsReproductionAnimeService } from './application/services/lists-reproduction-anime/lists-reproduction-anime.service';
import { CqrsModule } from '@nestjs/cqrs';

const commandHandlers = [
  AddAnimeToFavoritesCommandHandler,
  AddAnimeToFollowedsCommandHandler,
  AddAnimeToHistoryCommandHandler,
  AddAnimeToListReproductionCommandHandler,
  CreateListReproductionCommandHandler,
  CreateUserProfileByUserIdCommandHandler,
  RemoveAnimeFromFavoritesComandHandler,
  RemoveAnimeFromFollowedCommandHandler,
  RemoveAnimeFromHistoryCommandHandler,
  RemoveAnimeFromListReproductionCommandHandler,
  RemoveListReproductionCommandHandler,
];
const queryHandlers = [
  GetAllAnimesByListReproductionQueryHandler,
  GetAllListReproductionByUserIdQueryHandler,
  GetAnimeFavoritesByUserIdQueryHandler,
  GetAnimeFollowedsByUserIdQueryHandler,
  GetHistoryAnimeByUserIdQueryHandler,
  GetUserProfileUserIdQueryHandler,
];
const eventHandlers = [];
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnimeFavoriteEntity.name, schema: AnimeFavoriteSchema },
      { name: AnimeFollowedEntity.name, schema: AnimeFollowedSchema },
      {
        name: AnimeListReproductionEntity.name,
        schema: AnimeListReproductionSchema,
      },
      { name: ListReproductionEntity.name, schema: ListReproductionSchema },
      { name: UserProfileEntity.name, schema: AnimeFavoriteSchema },
      { name: HistoryAnimeEntity.name, schema: HistoryAnimeSchema },
    ]),
    AuthModule,
    CqrsModule
  ],
  controllers: [
    ListsReproductionAnimemController,
    HistoryAnimeController,
    FollowedAnimeController,
    FavoritesAnimmeController,
  ],
  providers: [
    { provide: IAnimeFavoritesRepository, useClass: AnimeFavoritesRepository },
    {
      provide: IAnimeAndListReproductionRepository,
      useClass: AnimeAndListReproductionRepository,
    },
    { provide: IAnimeFollowedsRepository, useClass: AnimeFollowedsRepository },
    { provide: IHistoryAnimeRepository, useClass: HistoryAnimeRepository },
    {
      provide: IListReproductionRepository,
      useClass: ListReproductionRepository,
    },
    { provide: IUserProfileRepository, useClass: UserProfileRepository },
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    FavoritesAnimeService,
    HistoryAnimeService,
    FollowedAnimeService,
    ListsReproductionAnimeService,
  ],
})
export class UserModule {}
