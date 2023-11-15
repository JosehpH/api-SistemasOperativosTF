/* eslint-disable prettier/prettier */
import { ReportType } from "src/reports/persistence/enitties/ReportType";

export class CreateReportCommand {
  constructor(
    public readonly userId: string,
    public readonly resourceId: string,
    public readonly reportType: ReportType,
    public readonly reason: string,
  ) {}
}