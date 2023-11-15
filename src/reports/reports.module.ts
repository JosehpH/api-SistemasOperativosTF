import { IReportsRepository } from './domain/repositories/IReportsRepository';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsController } from './interfaces/rest/reports/reports.controller';
import {
  ReportsEntity,
  ReportsSchema,
} from './persistence/enitties/ReportsEntity';
import { ReportsRepository } from './persistence/repositories/ReportsRepository';
import { ReportsService } from './application/services/reports/reports.service';
import { CreateReportCommandHandler } from './application/handlers/commands/CreateReportCommandHandler';
import { GetAllReportsQueryHandler } from './application/handlers/queries/GetAllReportsQueryHandler';
import { CqrsModule } from '@nestjs/cqrs';

const commandHandlers = [CreateReportCommandHandler];
const queryHandlers = [GetAllReportsQueryHandler];
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ReportsEntity.name,
        schema: ReportsSchema,
      },
    ]),
    CqrsModule,
  ],
  controllers: [ReportsController],
  providers: [
    {
      provide: IReportsRepository,
      useClass: ReportsRepository,
    },
    ReportsService,
    ...commandHandlers,
    ...queryHandlers,
  ],
})
export class ReportsModule {}
