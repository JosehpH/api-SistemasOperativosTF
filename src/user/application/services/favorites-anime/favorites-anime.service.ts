import { UserActivityDto } from './../../dtos/UserActivityDto';
/* eslint-disable prettier/prettier */
import { CommandBus } from '@nestjs/cqrs';
import { QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { AddAnimeToFavorites } from '../../messages/commands/AddAnimeToFavorites';
import { RemoveAnimeFromFavorites } from '../../messages/commands/RemoveAnimeFromFavorites';
import { GetAnimeFavoritesByUserId } from '../../messages/queries/GetAnimeFavoritesByUserId';

@Injectable()
export class FavoritesAnimeService {
    constructor(private queryBus: QueryBus, private commandBus: CommandBus) { }
    addAnimeToFavorites(userActivity: UserActivityDto) {
        const command: AddAnimeToFavorites = new AddAnimeToFavorites(userActivity.animeId, userActivity.userId);
        return this.commandBus.execute(command);
    }
    removeAnimeFromFavorites(userActivity: UserActivityDto) {
        const command: RemoveAnimeFromFavorites = new RemoveAnimeFromFavorites(
          userActivity.animeId,
          userActivity.userId,
        );
        return this.commandBus.execute(command);
    }
    getAllFavoritesByUserId(userId:string) {
        const query: GetAnimeFavoritesByUserId = new GetAnimeFavoritesByUserId(userId);
        return this.queryBus.execute(query);
    }
}
