/* eslint-disable prettier/prettier */
import { ProfileAnime } from 'src/anime/domain/aggregates/AnimeProfile';
import { AnimeEntity } from 'src/anime/infraestructure/persitence/entities/AnimeEntity';
import { AnimeProfileEntity } from 'src/anime/infraestructure/persitence/entities/AnimeProfileEnity';

export class ProfileMapper {
  public static toDomain(raw: AnimeProfileEntity,animeId: string): ProfileAnime {
    const profileAnime: ProfileAnime = new ProfileAnime();
      profileAnime.animeId = animeId;
      profileAnime.categories = raw.categories;
      profileAnime.visits = raw.visits;
      profileAnime.state = raw.stateAnime;
      return profileAnime;
  }
    public static toPersistence(raw: ProfileAnime, anime:AnimeEntity): AnimeProfileEntity {
        const profileAnimeEntity: AnimeProfileEntity = new AnimeProfileEntity();
        profileAnimeEntity.anime = anime;
        profileAnimeEntity.categories = raw.categories;
        profileAnimeEntity.visits = raw.visits;
        profileAnimeEntity.stateAnime = raw.state;
        return profileAnimeEntity;
  }
}
