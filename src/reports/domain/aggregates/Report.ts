/* eslint-disable prettier/prettier */
import { ReportType } from "src/reports/persistence/enitties/ReportType";

export class Report{
    userId: string;
    resourceId: string;
    reportType: ReportType;
    reason: string;
}