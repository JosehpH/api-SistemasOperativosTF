/* eslint-disable prettier/prettier */

export const IAnimeFavoritesRepository = "IAnimeFavoritesRepository";

export interface IAnimeFavoritesRepository { 
    addAnimeToFavorites(idAnime: string, idUser: string);
    removeAnimeFromFavorites(idAnime: string, idUser: string);
    getAllAnimesByUserId(idUser: string);
}