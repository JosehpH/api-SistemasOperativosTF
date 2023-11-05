/* eslint-disable prettier/prettier */
import { AnimeEntity } from './../../../anime/infraestructure/persitence/entities/AnimeEntity';
import { InjectModel } from "@nestjs/mongoose";
import { IAnimeFollowedsRepository } from "src/user/domain/repositories/IAnimeFollowedsRepository";
import { AnimeFollowedEntity } from "../persistence/AnimeFollowedEntity";
import { Model, Types } from "mongoose";

export class AnimeFollowedsRepository implements IAnimeFollowedsRepository{
    constructor(@InjectModel(AnimeFollowedEntity.name) private media: Model<AnimeFollowedEntity>) { }
    async getAllAnimesByUserId(idUser: string) {
        return await this.media.find({ user: { _id: idUser } }).populate('anime').exec();
    }
    
    async addAnimeToFolloweds(idAnime: string, idUser: string) {
        try {
            const idAnimeObjectId = new Types.ObjectId(idAnime);
            const idUserObjectId = new Types.ObjectId(idUser);
            const animeFollowed = new AnimeFollowedEntity();
            animeFollowed.anime = idAnimeObjectId;
            animeFollowed.user = idUserObjectId;
            const animeAdded = await this.media.create(animeFollowed);
            animeAdded.save();
            return true;
        } catch (error) {
            return false;
        }
    }
    async removeAnimeFromFolloweds(idAnime: string, idUser: string) {
        try {
            await this.media.deleteOne({ anime: { _id: idAnime }, user: { _id: idUser } }).exec();
            return true;
        } catch (error) {
            return false;
        }
    }

}