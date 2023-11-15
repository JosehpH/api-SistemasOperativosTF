/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllReportsQuery } from '../../messages/queries/GetAllReportsQuery';
import { IReportsRepository } from 'src/reports/domain/repositories/IReportsRepository';
import { Inject } from '@nestjs/common';

@QueryHandler(GetAllReportsQuery)
export class GetAllReportsQueryHandler
  implements IQueryHandler<GetAllReportsQuery>
{
  constructor(
    @Inject(IReportsRepository) private reportsRepository: IReportsRepository,
  ) {}
  execute(query: GetAllReportsQuery) {
    return this.reportsRepository.getAllReports();
  }
}
