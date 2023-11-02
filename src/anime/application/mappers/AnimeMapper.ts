/* eslint-disable prettier/prettier */
import { Anime } from 'src/anime/domain/aggregates/Anime';
import { AnimeEntity } from 'src/anime/infraestructure/persitence/entities/AnimeEntity';

export class AnimeMapper {
  static toDomain(anime: AnimeEntity): Anime {
    const animeDomain: Anime = new Anime();
    animeDomain.title = anime.title;
    animeDomain.description = anime.sinopsis;
    animeDomain.image = anime.image;
    animeDomain.publicationDate = anime.publicationDate;
    return animeDomain;
  }
    static toEntity(anime: Anime): AnimeEntity {
        const animeEntity: AnimeEntity = new AnimeEntity();
        animeEntity.title = anime.title;
        animeEntity.sinopsis = anime.description;
        animeEntity.image = anime.image;
        animeEntity.publicationDate = anime.publicationDate;
        return animeEntity;
  }
}
