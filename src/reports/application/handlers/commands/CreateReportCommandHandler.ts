/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateReportCommand } from "../../messages/commands/CreateReportCommand";
import { Inject } from "@nestjs/common";
import { IReportsRepository } from "src/reports/domain/repositories/IReportsRepository";
import { Report } from "src/reports/domain/aggregates/Report";

@CommandHandler(CreateReportCommand)
export class CreateReportCommandHandler
  implements ICommandHandler<CreateReportCommand>
{
  constructor(
    @Inject(IReportsRepository) private reportsRepository: IReportsRepository,
  ) {}
    execute(command: CreateReportCommand) {
        const report = new Report();
        report.userId = command.userId;
        report.resourceId = command.resourceId;
        report.reportType = command.reportType;
        report.reason = command.reason;
        return this.reportsRepository.createReport(report);
  }
}