/* eslint-disable prettier/prettier */
import {
  CommandBus,
  CommandHandler,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { NotifyFollowersEpisodeNewCommand } from '../../messages/commands/NotifyFollowersEpisodeNewCommand';
import { GetUsersByAnimeId } from 'src/user/application/messages/queries/GetUsersByAnimeId';
import { CreateNotificationCommand } from '../../messages/commands/CreateNotificationCommand';
import { Logger } from '@nestjs/common';

@CommandHandler(NotifyFollowersEpisodeNewCommand)
export class NotifyFollowersEpisodeNewCommandHandler
  implements ICommandHandler<NotifyFollowersEpisodeNewCommand>
{
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}
  async execute(command: NotifyFollowersEpisodeNewCommand) {
    try {
      const query = new GetUsersByAnimeId(command.animeId);
      const followeds = await this.queryBus.execute(query);

      for (const followed of followeds) {
        const message = `New episode of ${followed.anime.title} is out!`;
        const createNotification = new CreateNotificationCommand(
          followed.user,
          message,
          false,
        );
        await this.commandBus.execute(createNotification);
      }
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la ejecución.
      Logger.error(
        `Error in NotifyFollowersEpisodeNewCommand: ${error.message}`,
      );
      throw error;
    }
  }
}
