/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProfileAnime } from 'src/anime/domain/aggregates/AnimeProfile';
import { IAnimeProfileRepository } from 'src/anime/domain/repositories/IAnimeProfileRepository';
import { AnimeProfileEntity } from '../entities/AnimeProfileEnity';
import { Model, Types } from 'mongoose';
import { QueryBus } from '@nestjs/cqrs';
import { ProfileMapper } from 'src/anime/application/mappers/ProfileMapper';
import { Type } from 'class-transformer';
import { GetAnimeByIdQuery } from 'src/anime/application/messages/queries/GetAnimeByIdQuery';

export class AnimeProfileRepository implements IAnimeProfileRepository {
  constructor(
    @InjectModel(AnimeProfileEntity.name)
    private animeProfileRespository: Model<AnimeProfileEntity>,
    private queryBus:QueryBus
  ) {}
    getProfileAnimeByAnimeId(id: string){
        return this.animeProfileRespository.find({anime:id}).exec();
  }
  async createProfileAnime(profileAnime: ProfileAnime): Promise<any> {
    const query: GetAnimeByIdQuery = new GetAnimeByIdQuery(profileAnime.animeId);
    const anime = await this.queryBus.execute(query);
    const  animeProfileEntity = ProfileMapper.toPersistence(profileAnime, anime);
    const animeCreated = await this.animeProfileRespository.create(animeProfileEntity);
    animeCreated.save();
  }
}
