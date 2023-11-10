/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateNotificationCommand } from '../../messages/commands/CreateNotificationCommand';
import { INotificationRepository } from 'src/notifications/domain/repositories/INotificationRepository';
import { Inject, Logger } from '@nestjs/common';
import { Notification } from 'src/notifications/domain/aggregates/Notification';

@CommandHandler(CreateNotificationCommand)
export class CreateNotificationCommandHandler
  implements ICommandHandler<CreateNotificationCommand>
{
  constructor(
    @Inject(INotificationRepository)
    private notificationRepo: INotificationRepository,
  ) {}
  async execute(command: CreateNotificationCommand) {
    const notification = new Notification();
    notification.message = command.message;
    notification.read = command.read;
    notification.userId = command.userId;
    return this.notificationRepo.createNotification(notification);
  }
}
