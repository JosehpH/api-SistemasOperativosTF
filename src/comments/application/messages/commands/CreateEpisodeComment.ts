/* eslint-disable prettier/prettier */
export class CreateEpisodeComment{
    constructor(
        public readonly episodeId: string,
        public readonly comment: string,
        public readonly userId: string,
        public readonly media: string,
        public readonly parentId: string
    ) {}
}