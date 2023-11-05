/* eslint-disable prettier/prettier */
export const IHistoryAnimeRepository = "IHistoryAnimeRepository";
export interface IHistoryAnimeRepository {
    addAnimeToHistory(idAnime: string, idUser: string);
    removeAnimeFromHistory(idAnime: string, idUser: string);
    getAllAnimesByUserId(idUser: string);
}