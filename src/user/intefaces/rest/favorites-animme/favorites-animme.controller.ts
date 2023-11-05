import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserActivityDto } from 'src/user/application/dtos/UserActivityDto';
import { FavoritesAnimeService } from 'src/user/application/services/favorites-anime/favorites-anime.service';

@Controller('favorites-anime')
@ApiTags('Favorites Anime By User')
export class FavoritesAnimmeController {
  constructor(private favoritesAnimeService: FavoritesAnimeService) {}

  @Post()
  @ApiOperation({ summary: 'Add anime to favorites' })
  addAnimeToFavorites(@Body() userActivity: UserActivityDto) {
    return this.favoritesAnimeService.addAnimeToFavorites(userActivity);
  }
  @Post('/remove')
  @ApiOperation({ summary: 'Remove anime from favorites' })
  removeAnimeFromFavorites(@Body() userActivity: UserActivityDto) {
    return this.favoritesAnimeService.removeAnimeFromFavorites(userActivity);
  }
  @Get('/:userId')
  @ApiOperation({ summary: 'Get all favorites anime by user id' })
  getAllFavoritesByUserId(@Param('userId') userId: string) {
    return this.favoritesAnimeService.getAllFavoritesByUserId(userId);
  }
}
