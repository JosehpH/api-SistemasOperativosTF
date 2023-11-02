/* eslint-disable prettier/prettier */
import { ProfileAnime } from "../aggregates/AnimeProfile";
export const IAnimeProfileRepository = "IAnimeProfileRepository";

export interface IAnimeProfileRepository {
  getProfileAnimeByAnimeId(id: string);
  createProfileAnime(profileAnime: ProfileAnime);
}
