/* eslint-disable prettier/prettier */
import { StateAnime } from '../../../../shared/model/values/StateAnime';
export class CreateAnimeCommand {
  constructor(
    public readonly title: string,
    public readonly sinopsis: string,
    public readonly publicationDate: Date,
    public readonly image: string,
    public readonly state: StateAnime,
  ) {}
}
