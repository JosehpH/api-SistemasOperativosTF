import { Logger } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetNotificationsByUserIdQuery } from './../../messages/queries/GetNotificationsByUserIdQuery';
import { Inject } from '@nestjs/common';
import { INotificationRepository } from 'src/notifications/domain/repositories/INotificationRepository';
@QueryHandler(GetNotificationsByUserIdQuery)
export class GetNotificationsByUserIdQueryHandler
  implements IQueryHandler<GetNotificationsByUserIdQuery>
{
  constructor(
    @Inject(INotificationRepository)
    private notificationRepo: INotificationRepository,
  ) {}
  execute(query: GetNotificationsByUserIdQuery) {
    return this.notificationRepo.getNotificationsByUserId(query.userId);
  }
}