/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { Notification } from './../../domain/aggregates/Notification';
import { InjectModel } from '@nestjs/mongoose';
import { NotificationEntity } from '../entities/NotificationEntity';
import { Model, Types } from 'mongoose';
import { INotificationRepository } from 'src/notifications/domain/repositories/INotificationRepository';

export class NotificationsRepository implements INotificationRepository {
  constructor(
    @InjectModel(NotificationEntity.name)
    private notificationRepo: Model<NotificationEntity>,
  ) {}
  async getNotificationsByUserId(userId: string) {
    Logger.log('Buscando notificaciones del usuario: ' + userId);
    return await this.notificationRepo.find({ user: { _id: userId } }).exec();
  }
  async createNotification(notification: Notification) {
    try {
      const newNotification = await this.notificationRepo.create({
        message: notification.message,
        read: notification.read,
        user: new Types.ObjectId(notification.userId),
      });
        Logger.log("Usuario: " + await notification.userId);
      newNotification.save();
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }
  updateNotification(notification: Notification) {
    //TODO: Fix this
    const notificationNew = new NotificationEntity();
    notificationNew.message = notification.message;
    notificationNew.read = notification.read;
    notificationNew.user = notification.userId as any;
    this.notificationRepo.updateOne(
      { userId: notification.userId },
      notificationNew,
    );
  }
}
