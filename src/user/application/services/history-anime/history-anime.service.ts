/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddAnimeToHistory } from '../../messages/commands/AddAnimeToHistory';
import { UserActivityDto } from '../../dtos/UserActivityDto';
import { GetHistoryAnimeByUserId } from '../../messages/queries/GetHistoryAnimeByUserId';

@Injectable()
export class HistoryAnimeService {
    constructor(private queryBus: QueryBus, private commandBus: CommandBus) { }
    addAnimeToHistory(userActivity: UserActivityDto) {
        const command: AddAnimeToHistory = new AddAnimeToHistory(userActivity.animeId, userActivity.userId);
        return this.commandBus.execute(command);
    }
    removeAnimeFromHistory(userActivity: UserActivityDto) {
        const command: AddAnimeToHistory = new AddAnimeToHistory(userActivity.animeId, userActivity.userId);
        return this.commandBus.execute(command);
    }
    getAllHistoryByUserId(userId:string) {
        const query: GetHistoryAnimeByUserId = new GetHistoryAnimeByUserId(
          userId,
        );
        return this.queryBus.execute(query);
    }
}
