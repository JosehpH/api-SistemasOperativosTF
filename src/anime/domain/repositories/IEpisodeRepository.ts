/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongoose';
import { Episode } from '../aggregates/Episode';

export const IEpisodeRepository = "IEpisodeRepository";
export interface IEpisodeRepository {
  getEpisode(id: string);
  getEpisodesByAnimeId(idAnime: string);
  createEpisode(episode: Episode);
}