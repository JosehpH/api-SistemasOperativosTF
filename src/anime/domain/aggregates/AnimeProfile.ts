/* eslint-disable prettier/prettier */
import { StateAnime } from "src/shared/values/StateAnime";
import { CategoriesAnime } from "src/shared/values/CategoriesAnime";
export class ProfileAnime{
    public animeId: string;
    public visits: number;
    public state: StateAnime;
    public categories: CategoriesAnime[];
}