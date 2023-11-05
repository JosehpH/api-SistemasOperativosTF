import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('reports')
@ApiTags('Reports')
export class ReportsController {
  @Get('/:userId')
  @ApiOperation({ summary: 'Get reports by user id' })
  async getReportsByUserId() {
    return null;
  }
  @Get('/:animeId')
  @ApiOperation({ summary: 'Get reports by anime id' })
  async getReportsByAnimeId() {
    return null;
  }

  @Get('/:episodeId')
  @ApiOperation({ summary: 'Get reports by episode id' })
  async getReportsByEpisodeId() {
    return null;
  }
  @Get('/:commentId')
  @ApiOperation({ summary: 'Get reports by comment id' })
  async getReportsByCommentId() {
    return null;
  }

  @Post()
  @ApiOperation({ summary: 'Create report' })
  async createReport() {
    return null;
  }
  @Delete('/:reportId')
  @ApiOperation({ summary: 'Delete report' })
  async deleteReport() {
    return null;
  }
}
