import { Controller, Get, Param, Logger } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetNotificationsByUserIdQuery } from 'src/notifications/application/messages/queries/GetNotificationsByUserIdQuery';

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationsController {
  constructor(private queryBus: QueryBus) {}
  @Get('/:userId')
  @ApiOperation({ summary: 'Get notifications by user id' })
  async getNotificationsByUserId(@Param('userId') userId: string) {
    const query = new GetNotificationsByUserIdQuery(userId);
    return this.queryBus.execute(query);
  }
}
