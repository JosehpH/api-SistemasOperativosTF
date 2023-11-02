/* eslint-disable prettier/prettier */
import { StateAnime } from "src/shared/model/values/StateAnime";
import { CategoriesAnime } from "src/shared/model/values/CategoriesAnime";
export class ProfileAnime{
    public animeId: string;
    public visits: number;
    public state: StateAnime;
    public categories: CategoriesAnime[];
}