/* eslint-disable prettier/prettier */
import { Inject, Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllListReproductionByUserId } from "../../messages/queries/GetAllListReproductionByUserId";
import { IListReproductionRepository } from "src/user/domain/repositories/IListReproductionRepository";

@QueryHandler(GetAllListReproductionByUserId)
export class GetAllListReproductionByUserIdQueryHandler
  implements IQueryHandler<GetAllListReproductionByUserId>
{
  constructor(
    @Inject(IListReproductionRepository)
    private repository: IListReproductionRepository,
  ) {}
  execute(query: GetAllListReproductionByUserId) {
    const { userId } = query;
    return this.repository.getAllListReproductionByUserId(userId);
  }
}