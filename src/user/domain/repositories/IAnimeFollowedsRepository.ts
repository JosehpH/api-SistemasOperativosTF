/* eslint-disable prettier/prettier */
export const IAnimeFollowedsRepository = "IAnimeFollowedsRepository";
export interface IAnimeFollowedsRepository { 
    addAnimeToFolloweds(idAnime: string, idUser: string);
    removeAnimeFromFolloweds(idAnime: string, idUser: string);
    getAllAnimesByUserId(idUser: string);
}