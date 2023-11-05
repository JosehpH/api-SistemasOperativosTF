import { UserActivityDto } from 'src/user/application/dtos/UserActivityDto';
import { HistoryAnimeService } from './../../../application/services/history-anime/history-anime.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('history-anime')
@ApiTags('History Anime Management')
export class HistoryAnimeController {
  constructor(private historyAnimeService: HistoryAnimeService) {}

  @Post()
  @ApiOperation({ summary: 'Add anime to history' })
  addAnimeToHistory(@Body() userActivity: UserActivityDto) {
    return this.historyAnimeService.addAnimeToHistory(userActivity);
  }
  @Post('/remove')
  @ApiOperation({ summary: 'Remove anime from history' })
  removeAnimeFromHistory(@Body() userActivity: UserActivityDto) {
    return this.historyAnimeService.removeAnimeFromHistory(userActivity);
  }
  @Get('/:userId')
  @ApiOperation({ summary: 'Get all history by user id' })
  getAllHistoryByUserId(@Param('userId') userId: string) {
    return this.historyAnimeService.getAllHistoryByUserId(userId);
  }
}
