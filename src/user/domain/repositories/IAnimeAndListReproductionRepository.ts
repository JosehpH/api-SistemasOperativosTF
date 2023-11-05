/* eslint-disable prettier/prettier */
export const IAnimeAndListReproductionRepository = "IAnimeAndListReproductionRepository";
export interface IAnimeAndListReproductionRepository {
    addAnimeToListRepository(idAnime: string, idListRepository: string);
    removeAnimeFromListRepository(idAnime: string, idListRepository: string);
    getAllAnimesByListRepositoryId(idListRepository: string);
}
