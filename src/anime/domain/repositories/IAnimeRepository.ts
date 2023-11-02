/* eslint-disable prettier/prettier */
import { Anime } from "../aggregates/Anime";
export const IAnimeRepository = "IAnimeRepository";
export interface IAnimeRespository{
    getAnimeById(id: string);
    getAnimeByTitle(title: string);
    getAnimes();
    createAnime(anime: Anime);
    updateAnime(anime: Anime);
}