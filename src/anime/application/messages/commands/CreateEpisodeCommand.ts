/* eslint-disable prettier/prettier */
export class CreateEpisodeCommand{
    constructor(
        public readonly title: string,
        public readonly video: string,
        public readonly image: string,
        public readonly number: number,
        public readonly animeId: string,
    ) {}
}