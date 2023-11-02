/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Episode } from 'src/anime/domain/aggregates/Episode';
import { AnimeEntity } from 'src/anime/infraestructure/persitence/entities/AnimeEntity';
import { EpisodeEntity } from 'src/anime/infraestructure/persitence/entities/EpisodeEntity';

export class EpisodeMapper {
  static toDomain(episode: EpisodeEntity, animeId: string): Episode {
    const episodeDomain: Episode = new Episode();
    episodeDomain.title = episode.title;
    episodeDomain.image = episode.image;
    episodeDomain.number = episode.number;
    episodeDomain.video = episode.video;
    episodeDomain.animeId = animeId;
    return episodeDomain;
  }
  static async toEntity( episode: Episode, anime: AnimeEntity,) {
    const episodeEntity: EpisodeEntity = new EpisodeEntity();
    episodeEntity.title = episode.title;
    episodeEntity.image = episode.image;
    episodeEntity.number = episode.number;
    episodeEntity.video = episode.video;
    episodeEntity.anime = anime;
    return episodeEntity;
  }
}
