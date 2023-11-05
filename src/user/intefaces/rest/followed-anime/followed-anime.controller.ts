import { Param } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { UserActivityDto } from 'src/user/application/dtos/UserActivityDto';
import { FollowedAnimeService } from './../../../application/services/followed-anime/followed-anime.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('followed-anime')
@ApiTags('Followed Anime Management')
export class FollowedAnimeController {
  constructor(private followedAnimeService: FollowedAnimeService) {}

  @Post()
  @ApiOperation({ summary: 'Add anime to followed' })
  addAnimeToFollowed(@Body() userActivity: UserActivityDto) {
    return this.followedAnimeService.addAnimeToFollowed(userActivity);
  }
  @Post("/remove")
  @ApiOperation({ summary: 'Remove anime from followed' })
  removeAnimeFromFollowed(@Body() userActivity: UserActivityDto) {
    return this.followedAnimeService.removeAnimeFromFollowed(userActivity);
  }
  @Get('/:userId')
  @ApiOperation({ summary: 'Get all followed by user id' })
  getAllFollowedByUserId(@Param('userId') userId: string) {
    return this.followedAnimeService.getAllFollowedByUserId(userId);
  }
}
