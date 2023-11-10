/* eslint-disable prettier/prettier */

import { Notification } from "../aggregates/Notification";

export const INotificationRepository ='INotificationRepository';
export interface INotificationRepository {
  getNotificationsByUserId(userId: string);
  createNotification(notification: Notification);
  updateNotification(notification: Notification);
}