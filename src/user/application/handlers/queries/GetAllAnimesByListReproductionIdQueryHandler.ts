/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllAnimeByListReproductionId } from '../../messages/queries/GetAllAnimesByListResproductionId';
import { Inject } from '@nestjs/common';
import { IAnimeAndListReproductionRepository } from 'src/user/domain/repositories/IAnimeAndListReproductionRepository';

@QueryHandler(GetAllAnimeByListReproductionId)
export class GetAllAnimesByListReproductionQueryHandler
  implements IQueryHandler<GetAllAnimeByListReproductionId>
{
  constructor(
    @Inject(IAnimeAndListReproductionRepository)
    private repository: IAnimeAndListReproductionRepository,
  ) {}
  async execute(query: GetAllAnimeByListReproductionId) {
    const { listReproductionId } = query;
    return this.repository.getAllAnimesByListRepositoryId(listReproductionId);
  }
}
