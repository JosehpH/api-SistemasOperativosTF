/* eslint-disable prettier/prettier */

import { CategoriesAnime } from "src/shared/model/values/CategoriesAnime";
import { StateAnime } from "src/shared/model/values/StateAnime";
export class CreateProfileAnimeCommand{
    constructor(
        public readonly animeId: string,
        public readonly visits: number,
        public readonly state: StateAnime,
        public readonly categories: CategoriesAnime[],
    ){}
}