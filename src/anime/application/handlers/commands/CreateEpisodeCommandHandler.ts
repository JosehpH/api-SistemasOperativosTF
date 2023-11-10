/* eslint-disable prettier/prettier */
import { CommandHandler, EventBus, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateEpisodeCommand } from '../../messages/commands/CreateEpisodeCommand';
import { IEpisodeRepository } from 'src/anime/domain/repositories/IEpisodeRepository';
import { Inject } from '@nestjs/common';
import { Episode } from 'src/anime/domain/aggregates/Episode';
import { EpisodeAddedEvent } from 'src/anime/domain/events/EpisodeAddedEvent';

@CommandHandler(CreateEpisodeCommand)
export class CreateEpisodeCommandHandler
  implements ICommandHandler<CreateEpisodeCommand>
{
  constructor(
    @Inject(IEpisodeRepository) private episodeRepository: IEpisodeRepository,
    private eventBus:EventBus
  ) {}

  async execute(command: CreateEpisodeCommand) {
    const episode: Episode = new Episode();
    episode.title = command.title;
    episode.number = command.number;
    episode.image = command.image;
    episode.video = command.video;
    episode.animeId = command.animeId;
    if(await this.episodeRepository.createEpisode(episode)) {
      this.eventBus.publish(new EpisodeAddedEvent(episode.animeId));
    }
  }
}
