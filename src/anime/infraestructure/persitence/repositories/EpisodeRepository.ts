/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Episode } from 'src/anime/domain/aggregates/Episode';
import { IEpisodeRepository } from 'src/anime/domain/repositories/IEpisodeRepository';
import { EpisodeEntity } from '../entities/EpisodeEntity';
import { QueryBus } from '@nestjs/cqrs';
import { EpisodeMapper } from 'src/anime/application/mappers/EpisodeMapper';
import { GetAnimeByIdQuery } from 'src/anime/application/messages/queries/GetAnimeByIdQuery';
import { Logger } from '@nestjs/common';

export class EpisodeRepository implements IEpisodeRepository {
  constructor(
    @InjectModel(EpisodeEntity.name) private episodeRepository: Model<EpisodeEntity>,
    private queryBus: QueryBus,
  ) {}
  getEpisode(id: string) {
    return this.episodeRepository.findById(id).exec();
  }
  getEpisodesByAnimeId(idAnime: string) {
    return this.episodeRepository.find({anime:idAnime}).exec();
  }
  async createEpisode(episode: Episode) {
      try {
        const query: GetAnimeByIdQuery = new GetAnimeByIdQuery(episode.animeId);
        const anime = await this.queryBus.execute(query);
        if (!anime) {
          throw new Error(`Anime con ID ${episode.animeId} no encontrado.`);
        }
        const episodeEntity = await EpisodeMapper.toEntity(episode, anime);
        const episodeCreated = await this.episodeRepository.create(
          episodeEntity,
        );
         return await episodeCreated.save(); 
      } catch (error) {
        console.error('Error al crear el episodio:', error);
        throw error;
      }
  }
}
