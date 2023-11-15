/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreateReportDto{
    @ApiProperty()
    userId: string;
    @ApiProperty()    
    resourceId: string;
    @ApiProperty()
    reportType: string;
    @ApiProperty()
    reason: string;
}