/* eslint-disable prettier/prettier */
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAnimeFavoritesRepository } from "src/user/domain/repositories/IAnimeFavoritesRepository";
import { AnimeFavoriteEntity } from "../persistence/AnimeFavoriteEntity";

export class AnimeFavoritesRepository implements IAnimeFavoritesRepository {
  constructor(
    @InjectModel(AnimeFavoriteEntity.name)
    private media: Model<AnimeFavoriteEntity>,
  ) {}
  getAllAnimesByUserId(idUser: string) {
    return this.media.find({ user: { _id: idUser } }).populate("anime").exec();
  }
  async addAnimeToFavorites(idAnime: string, idUser: string) {
    try {
      const animeAdded = await this.media.create({anime: idAnime, user: idUser});
      animeAdded.save();
      return true;
    } catch (error) {
      return false;
    }
  }
  async removeAnimeFromFavorites(idAnime: string, idUser: string) {
    try {
      await this.media.deleteOne({
        anime: { _id: idAnime },
        user: { _id: idUser }
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}