/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CategoriesAnime } from 'src/shared/values/CategoriesAnime';
import { StateAnime } from 'src/shared/values/StateAnime';
import { IsEnum, IsArray } from 'class-validator';

const fechaActual = new Date();

const año = fechaActual.getFullYear();
const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Sumamos 1 al mes porque en JavaScript los meses van de 0 a 11
const dia = String(fechaActual.getDate()).padStart(2, '0');
const fechaFormateada = `${año}-${mes}-${dia}`;

export class CreateAnimeDto {
  @ApiProperty({ required: true, example: 'Naruto' })
  public title: string;
  @ApiProperty({ required: true, example: 'Esto es un poco sobre el anime' })
  public descrption: string;
  @ApiProperty({ required: true ,example: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%'})
  public image: string;
  @ApiProperty({ required: true, example: fechaFormateada })
  public publicationDate: Date;
  @ApiProperty({ required: true, example: 10 })
  public visits: number;

  @ApiProperty({
    required: true,
    type: String,
    enum: Object.values(StateAnime),
    example: StateAnime.EMISION,
  })
  @IsEnum(StateAnime)
  public state: StateAnime;

  @ApiProperty({
    required: true,
    type: [String],
    enum: Object.values(CategoriesAnime),
    example: [CategoriesAnime.ACTION, CategoriesAnime.COMEDY],
  })
  @IsEnum(CategoriesAnime, { each: true })
  public categories: CategoriesAnime[];
}
