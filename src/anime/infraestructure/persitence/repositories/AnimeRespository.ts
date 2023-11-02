/* eslint-disable prettier/prettier */
import { InjectModel } from "@nestjs/mongoose";
import { Anime } from "src/anime/domain/aggregates/Anime";
import { IAnimeRespository } from "src/anime/domain/repositories/IAnimeRepository";
import { AnimeEntity } from "../entities/AnimeEntity";
import { Model, Types } from "mongoose";
import { AnimeMapper } from "src/anime/application/mappers/AnimeMapper";
import { QueryBus } from "@nestjs/cqrs";

export class AnimeRepository implements IAnimeRespository{
    constructor(@InjectModel(AnimeEntity.name) private animeRespository: Model<AnimeEntity>) { }
    getAnimeById(id: string){
        return this.animeRespository.findById(id).exec();
    }
    getAnimeByTitle(title: string){
        return  this.animeRespository.find({title: title}).exec();
    }
    getAnimes(){
        return this.animeRespository.find().exec();
    }
   async createAnime(anime: Anime) {
       const animeEnity =  await this.animeRespository.create(AnimeMapper.toEntity(anime));
       animeEnity.save();
       return animeEnity._id;
    }
    updateAnime(anime: Anime){
        return this.animeRespository.updateOne({_id: anime.id},AnimeMapper.toEntity(anime)).exec();
    }

}