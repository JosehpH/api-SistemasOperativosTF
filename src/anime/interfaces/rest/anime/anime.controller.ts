/* eslint-disable prettier/prettier */
import { Body, Post,Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAnimeDto } from 'src/anime/application/dtos/CreateAnimeDto';
import { AnimeService } from 'src/anime/application/services/anime/anime.service';
import { CategoriesAnime } from 'src/shared/values/CategoriesAnime';
import { StateAnime } from 'src/shared/values/StateAnime';

const statesValues = Object.values(StateAnime).join(', ');
const categoriesValues = Object.values(CategoriesAnime).join(', ');
@Controller('anime')
@ApiTags('Anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Post()
  @ApiOperation({
    summary: 'Create anime',
    description: `Para crear el anime debes usar cualquiera de los siguientes valores para el campo de <i>state</i>: <b>${statesValues}</b> <br> Para el campo de <i>categories</i>:<b>${categoriesValues}</b>`,
  })
  async createAnime(@Body() anime: CreateAnimeDto) {
    return await this.animeService.createAnime(anime);
  }
  @Get('/:id')
  async getAnimeById(@Param('id') id: string) {
    return await this.animeService.getAnimeById(id);
  }
  @Get('/:title/title')
  async getAnimeByTitle(@Param('title') title: string) {
    return await this.animeService.getAnimeByTitle(title);
  }
  @Get()
  async getAnimes() {
    return await this.animeService.getAnimes();
  }
}
