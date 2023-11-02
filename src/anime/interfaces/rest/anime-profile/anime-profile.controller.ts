import { Get, Param } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { AnimeProfileService } from './../../../application/services/anime-profile/anime-profile.service';
import { Controller } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller('anime-profile')
@ApiTags('Anime Profile')
export class AnimeProfileController {
    constructor(private animeProfileService: AnimeProfileService) { }
    
    @ApiProperty({description:"Get anime profile by anime id"})
    @Get("/:id")
    getAnimeProfileByAnimeId(@Param("id") id: string) {
        return this.animeProfileService.getAnimeProfileByAnimeId(id);
    }

}
