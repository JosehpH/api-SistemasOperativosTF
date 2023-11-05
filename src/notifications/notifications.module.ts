import { Module } from '@nestjs/common';
import { NotificationsController } from './interfaces/rest/notifications/notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  NotificationEntity,
  NotificationSchema,
} from './infraestructure/persistence/NotificationEntity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: NotificationEntity.name,
        schema: NotificationSchema,
      },
    ]),
  ],
  controllers: [NotificationsController],
  providers: [],
})
export class NotificationsModule {}
