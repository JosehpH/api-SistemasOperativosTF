/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { AnimeListReproductionEntity } from './../persistence/AnimeListReproductionEntity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IAnimeAndListReproductionRepository } from 'src/user/domain/repositories/IAnimeAndListReproductionRepository';

export class AnimeAndListReproductionRepository
  implements IAnimeAndListReproductionRepository
{
  constructor(
    @InjectModel(AnimeListReproductionEntity.name)
    private media: Model<AnimeListReproductionEntity>,
  ) {}
  async getAllAnimesByListRepositoryId(idListReproduction: string) {
    Logger.log("Entro al repositorio de GetAllAnimesByListRepositoryId");
    const response = await this.media
      .find({ listReproduction:{_id:idListReproduction} })
      .populate('anime')
      .populate('listReproduction').exec();
    Logger.log("ListId: " + idListReproduction);
    return response;
  }

  async addAnimeToListRepository(idAnime: string, idListRepository: string) {
    try {
      const animeObjectId =  new Types.ObjectId(idAnime);
      const listReproductionObjectId =  new Types.ObjectId(idListRepository);
      const animeToList = new AnimeListReproductionEntity();
      animeToList.anime = animeObjectId;
      animeToList.listReproduction = listReproductionObjectId;

      const animeAdded = await this.media.create(animeToList);
      await animeAdded.save();
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
    }
    
  async removeAnimeFromListRepository(
    idAnime: string,
    idListRepository: string,
  ) {
    try {
      await this.media.deleteOne({
        anime: { _id: idAnime },
        listReproduction: { _id: idListRepository },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
