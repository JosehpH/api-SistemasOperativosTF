/* eslint-disable prettier/prettier */
export class RemoveAnimeFromListReproduction{
    constructor(
        public readonly listReproductionId: string,
        public readonly animeId: string,
        public readonly userId: string
    ){}
}