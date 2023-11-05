import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsController } from './interfaces/rest/reports/reports.controller';
import {
  ReportsEntity,
  ReportsSchema,
} from './persistence/enitties/ReportsEntity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ReportsEntity.name,
        schema: ReportsSchema,
      },
    ]),
  ],
  controllers: [ReportsController],
  providers: [],
})
export class ReportsModule {}
