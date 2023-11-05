/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddAnimeToFollowed } from '../../messages/commands/AddAnimeToFolloweds';
import { UserActivityDto } from '../../dtos/UserActivityDto';
import { GetAnimeFollowedsByUserId } from '../../messages/queries/GetAnimeFollowedsByUserId';
import { RemoveAnimeFromFollowed } from '../../messages/commands/RemoveAnimeFromFollowed';

@Injectable()
export class FollowedAnimeService {
    constructor(private queryBus: QueryBus, private commandBus: CommandBus) { }
    addAnimeToFollowed(userActivity: UserActivityDto) {
        const command: AddAnimeToFollowed = new AddAnimeToFollowed(userActivity.animeId, userActivity.userId);
        return this.commandBus.execute(command);
    }
    removeAnimeFromFollowed(userActivity: UserActivityDto) {
        const command: RemoveAnimeFromFollowed = new RemoveAnimeFromFollowed(
          userActivity.animeId,
          userActivity.userId,
        );
        return this.commandBus.execute(command);
    }
    getAllFollowedByUserId(userId:string) {
        const query: GetAnimeFollowedsByUserId = new GetAnimeFollowedsByUserId(
          userId,
        );
        return this.queryBus.execute(query);
    }
}
