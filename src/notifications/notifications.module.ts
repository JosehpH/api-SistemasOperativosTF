/* eslint-disable prettier/prettier */
import { CreateNotificationCommandHandler } from './application/handlers/commands/CreateNotificationCommandHandler';
import { Get, Module } from '@nestjs/common';
import { NotificationsController } from './interfaces/rest/notifications/notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { INotificationRepository } from './domain/repositories/INotificationRepository';
import { NotificationsRepository } from './infraestructure/repositories/NotificationsRepository';
import {
  NotificationEntity,
  NotificationSchema,
} from './infraestructure/entities/NotificationEntity';
import { GetNotificationsByUserIdQueryHandler } from './application/handlers/queries/GetNotificationsByUserIdQuery';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateNotificationCommand } from './application/messages/commands/CreateNotificationCommand';
import { NotifyFollowersEpisodeNewCommandHandler } from './application/handlers/commands/NotifyFollowersEpisodeNewCommandHandler';
import { UserModule } from 'src/user/user.module';
import { GetUsersByAnimeIdQueryHandler } from 'src/user/application/handlers/queries/GetUsersByAnimeIdQueryHandler';


const commandHandlers = [CreateNotificationCommandHandler,NotifyFollowersEpisodeNewCommandHandler];
const queryHandlers = [GetNotificationsByUserIdQueryHandler, GetUsersByAnimeIdQueryHandler];
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: NotificationEntity.name,
        schema: NotificationSchema,
      },
    ]),
    CqrsModule,
    UserModule,
  ],
  controllers: [NotificationsController],
  providers: [
    { provide: INotificationRepository, useClass: NotificationsRepository },
    ...commandHandlers,
    ...queryHandlers,
  ],
  exports: [
    ...commandHandlers,
    MongooseModule.forFeature([
      {
        name: NotificationEntity.name,
        schema: NotificationSchema,
      },
    ]),
  ],
})
export class NotificationsModule {}
