/* eslint-disable prettier/prettier */
import { InjectModel } from "@nestjs/mongoose";
import { ReportsEntity } from "../enitties/ReportsEntity";
import { Model, Types } from "mongoose";
import { Report } from "src/reports/domain/aggregates/Report";

export class ReportsRepository {
    constructor(@InjectModel(ReportsEntity.name) private reportsRepository:Model<ReportsEntity>){}
  getAllReports() {
    return this.reportsRepository.find().exec();
  }
 async createReport(report:Report) {
      const newReport = new ReportsEntity();
      newReport.userId = new Types.ObjectId(report.userId);
      newReport.resourceId = new Types.ObjectId(report.resourceId);
      newReport.reportType = report.reportType;
      newReport.reason = report.reason;
     const newReportAdded = await this.reportsRepository.create(newReport);
     return newReportAdded.save();
  }
}
