/* eslint-disable prettier/prettier */
export class CreateAnimeComment {
    constructor(
        public readonly animeId: string,
        public readonly comment: string,
        public readonly userId: string,
        public readonly media: string,
        public readonly parentId: string
    ){}
}