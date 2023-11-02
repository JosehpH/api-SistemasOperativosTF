/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateEpisodeDto } from 'src/anime/application/dtos/CreateEpisodeDto';
import { EpisodeService } from 'src/anime/application/services/episode/episode.service';

@Controller('episode')
@ApiTags('Episode')
export class EpisodeController {
    constructor(private episodeService: EpisodeService) { }
    @ApiOperation({ summary: 'Create episode' })
    @Post()
    async createEpisode(@Body() episode: CreateEpisodeDto) {
        return await this.episodeService.createEpisode(episode);
    }

    @ApiOperation({ summary: 'Get episodes by animeId' })
    @Get("/:animeId")
    async getEpisodesByAnimeId(@Param('animeId') animeId: string) {
        return await this.episodeService.getEpisodesByAnimeId(animeId);
    }

    @ApiOperation({ summary: 'Get episode by id' })
    @Get("/:id")
    async getEpisodeById(@Param('id') id: string) {
        return await this.episodeService.getEpisodeById(id);
    }
}
