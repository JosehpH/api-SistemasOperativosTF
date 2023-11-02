/* eslint-disable prettier/prettier */
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { EpisodeAddedEvent } from "src/anime/domain/events/EpisodeAddedEvent";

@EventsHandler(EpisodeAddedEvent)
export class EpisodeAddedEventHandler
  implements IEventHandler<EpisodeAddedEvent> {
    handle(event: EpisodeAddedEvent) {
        
        //TODO implement send notification to user
        throw new Error("Method not implemented.");
    }
}