/* eslint-disable prettier/prettier */
export class EpisodeAddedEvent {
  constructor(
    public readonly episodeId: string,
    public readonly seasonId: string,
    public readonly animeId: string,
  ){}
}
