import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReportDto } from 'src/reports/application/dtos/CreateReportDto';
import { ReportsService } from 'src/reports/application/services/reports/reports.service';

@Controller('reports')
@ApiTags('Reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}
  @Post()
  @ApiOperation({ summary: 'Create report' })
  async createReport(@Body() report: CreateReportDto) {
    return this.reportsService.createReport(report);
  }
}
