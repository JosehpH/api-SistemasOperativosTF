import { GetAllAnimeByListReproductionId } from './../../messages/queries/GetAllAnimesByListResproductionId';
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateListReproduction } from '../../messages/commands/CreateListReproduction';
import { CreateListReproductionDto } from '../../dtos/CreateListReproductionDto';
import { RemoveListReproduction } from '../../messages/commands/RemoveListReproduction';
import { GetAllListReproductionByUserId } from '../../messages/queries/GetAllListReproductionByUserId';
import { AddAnimeToListReproduction } from '../../messages/commands/AddAnimeToListReproduction';
import { AnimeListReproductionDto } from '../../dtos/Anime-ListReproductionDto';
import { RemoveAnimeFromListReproduction } from '../../messages/commands/RemoveAnimeFromListReproduction';
import {  RemoveAnimeListReproductionDto } from '../../dtos/RemoveAnimeListReproductionDto';
import { DeleteListReproductionDto } from '../../dtos/DeleteListReproductionDto';

@Injectable()
export class ListsReproductionAnimeService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}
  createListReproduction(listReproductionDto: CreateListReproductionDto) {
    const command: CreateListReproduction = new CreateListReproduction(
      listReproductionDto.name,
      listReproductionDto.description,
      listReproductionDto.userId,
    );
    return this.commandBus.execute(command);
  }

  deleteListReproduction(dto: DeleteListReproductionDto) {
    const command: RemoveListReproduction = new RemoveListReproduction(
      dto.listReproductionId,
      dto.userId,
    );
    return this.commandBus.execute(command);
  }

  getAllListReproductionByUserId(userId: string) {
    const query: GetAllListReproductionByUserId =
      new GetAllListReproductionByUserId(userId);
    return this.queryBus.execute(query);
  }

  GetAllAnimeByListReproductionId(listReproductionId: string) {
    const query: GetAllAnimeByListReproductionId =
      new GetAllAnimeByListReproductionId(listReproductionId);
    return this.queryBus.execute(query);
  }

  addAnimeToListReproduction(dto: AnimeListReproductionDto) {
    const command: AddAnimeToListReproduction = new AddAnimeToListReproduction(
      dto.animeId,
      dto.listReproductionId,
    );
    return this.commandBus.execute(command);
  }

  removeAnimeFromListReproduction(dto: RemoveAnimeListReproductionDto) {
    const command: RemoveAnimeFromListReproduction =
      new RemoveAnimeFromListReproduction(
        dto.animeId,
        dto.listReproductionId,
        dto.userId,
      );
    return this.commandBus.execute(command);
  }
}
