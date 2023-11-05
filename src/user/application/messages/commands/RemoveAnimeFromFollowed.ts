/* eslint-disable prettier/prettier */
export class RemoveAnimeFromFollowed{
    constructor(
        public readonly animeId: string,
        public readonly userId: string
    ){}
}