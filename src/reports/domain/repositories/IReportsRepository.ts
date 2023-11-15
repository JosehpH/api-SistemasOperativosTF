/* eslint-disable prettier/prettier */

import { Report } from "../aggregates/Report";

export const IReportsRepository = "IReportsRepository";
export interface IReportsRepository{
    getAllReports();
    createReport(report:Report);
}