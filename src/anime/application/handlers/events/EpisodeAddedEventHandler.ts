/* eslint-disable prettier/prettier */
import { Logger } from "@nestjs/common";
import { CommandBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { EpisodeAddedEvent } from "src/anime/domain/events/EpisodeAddedEvent";
import { NotifyFollowersEpisodeNewCommand } from "src/notifications/application/messages/commands/NotifyFollowersEpisodeNewCommand";

@EventsHandler(EpisodeAddedEvent)
export class EpisodeAddedEventHandler
  implements IEventHandler<EpisodeAddedEvent> {
    constructor(private commandBus: CommandBus) {}
  handle(event: EpisodeAddedEvent) {
    const command = new NotifyFollowersEpisodeNewCommand(event.animeId);
      this.commandBus.execute(command);
    }
}