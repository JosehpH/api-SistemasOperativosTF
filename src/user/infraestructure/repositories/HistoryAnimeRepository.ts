/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { IHistoryAnimeRepository } from 'src/user/domain/repositories/IHistoryAnimeRepository';
import { HistoryAnimeEntity } from '../persistence/HistoryAnimeEntity';
import { Model } from 'mongoose';

export class HistoryAnimeRepository implements IHistoryAnimeRepository {
  constructor(
    @InjectModel(HistoryAnimeEntity.name)
    private historyRepository: Model<HistoryAnimeEntity>,
  ) {}
  getAllAnimesByUserId(idUser: string) {
    return this.historyRepository.find({ user: { _id: idUser } }).populate('anime').exec();
  }
  async addAnimeToHistory(idAnime: string, idUser: string) {
    try {
      const animeAdded = await this.historyRepository.create({anime: idAnime, user: idUser});
      animeAdded.save();
      return true;
    } catch (error) {
      return false;
    }
  }
  removeAnimeFromHistory(idAnime: string, idUser: string) {
    try {
      this.historyRepository.deleteOne({
        anime: { _id: idAnime },
        user: { _id: idUser }
      });
      return true;
    } catch (error) {
      return false;
    }
  }

}
