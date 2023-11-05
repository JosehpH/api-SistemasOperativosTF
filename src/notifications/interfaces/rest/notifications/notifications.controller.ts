import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationsController {
  @Get('/:userId')
  @ApiOperation({ summary: 'Get notifications by user id' })
  async getNotificationsByUserId() {
    return 'Notifications by user id';
  }
}
