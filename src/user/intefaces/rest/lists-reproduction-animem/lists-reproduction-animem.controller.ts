import { CreateListReproductionDto } from 'src/user/application/dtos/CreateListReproductionDto';
import { ListsReproductionAnimeService } from './../../../application/services/lists-reproduction-anime/lists-reproduction-anime.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeleteListReproductionDto } from 'src/user/application/dtos/DeleteListReproductionDto';
import { RemoveAnimeListReproductionDto } from 'src/user/application/dtos/RemoveAnimeListReproductionDto';
import { AnimeListReproductionDto } from 'src/user/application/dtos/Anime-ListReproductionDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('lists-reproduction-anime')
@ApiTags('Lists Reproduction Management')
export class ListsReproductionAnimemController {
  constructor(
    private listsReproductionAnimeService: ListsReproductionAnimeService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create a list reproduction' })
  createListReproduction(
    @Body() listReproductionDto: CreateListReproductionDto,
  ) {
    return this.listsReproductionAnimeService.createListReproduction(
      listReproductionDto,
    );
  }

  @Post('/delete')
  @ApiOperation({ summary: 'Delete a list reproduction' })
  deleteListReproduction(@Body() dto: DeleteListReproductionDto) {
    return this.listsReproductionAnimeService.deleteListReproduction(dto);
  }

  @Get('/:userId')
  @ApiOperation({ summary: 'Get all list reproduction by user id' })
  getAllListReproductionByUserId(@Param('userId') userId: string) {
    return this.listsReproductionAnimeService.getAllListReproductionByUserId(
      userId,
    );
  }

  @Get('/:listReproductionId')
  @ApiOperation({ summary: 'Get all anime by list reproduction id' })
  GetAllAnimeByListReproductionId(
    @Param('listReproductionId') listReproductionId: string,
  ) {
    return this.listsReproductionAnimeService.GetAllAnimeByListReproductionId(
      listReproductionId,
    );
  }

  @Post('/add-anime')
  @ApiOperation({ summary: 'Add anime to list reproduction' })
  addAnimeToListReproduction(@Body() dto: AnimeListReproductionDto) {
    return this.listsReproductionAnimeService.addAnimeToListReproduction(dto);
  }

  @Post('/remove-anime')
  @ApiOperation({ summary: 'Remove anime from list reproduction' })
  removeAnimeFromListReproduction(@Body() dto: RemoveAnimeListReproductionDto) {
    return this.listsReproductionAnimeService.removeAnimeFromListReproduction(
      dto,
    );
  }
}
