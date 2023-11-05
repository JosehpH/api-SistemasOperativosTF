/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
export class DeleteListReproductionDto {
  @ApiProperty({ type: String, required: true })
  listReproductionId: string;
  @ApiProperty({ type: String, required: true })
  userId: string;
}