/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAllReportsQuery } from '../../messages/queries/GetAllReportsQuery';
import { CreateReportCommand } from '../../messages/commands/CreateReportCommand';

@Injectable()
export class ReportsService {
    constructor(
        private queryBus: QueryBus,
        private commandBus:CommandBus
    ) { }
    getAllReports() { 
        const query = new GetAllReportsQuery();
        return this.queryBus.execute(query);
    }
    createReport(report: any) {
        const command = new CreateReportCommand(
            report.userId,
            report.resourceId,
            report.reportType,
            report.reason
        );
        return this.commandBus.execute(command);
    }
}
