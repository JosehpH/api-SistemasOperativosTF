/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ListReproduction } from "src/user/domain/aggregates/ListReproduction";
import { IListReproductionRepository } from "src/user/domain/repositories/IListReproductionRepository";
import { ListReproductionEntity } from "../persistence/ListReproductionEntity";
import { ListReproductionMapper } from "src/user/application/mappers/ListReproductionMapper";
import { Logger } from '@nestjs/common';

export class ListReproductionRepository implements IListReproductionRepository{
    constructor(@InjectModel(ListReproductionEntity.name) private listRepository: Model<ListReproductionEntity>,
    @InjectModel(UserEntity.name) private userRepository:Model<UserEntity>){} 
    async getAllListReproductionByUserId(userId: string) {
        Logger.log('Entro al repositorio de GetAllListReproductionByUserId');
        return await this.listRepository.find({user:{_id:userId}}).exec();
    }
    async createListReproduction(listReproduction: ListReproduction) {
        try {
            const listReproductionAdded = await this.listRepository.create(ListReproductionMapper.toEntity(listReproduction));
            listReproductionAdded.save();
            return true;
        } catch (error) {
            return false;
        }
    }
    RemoveListReproduction(ListReproductionId: string) {
        try { 
            this.listRepository.deleteOne({_id: ListReproductionId});
            return true;
        }catch(error){
            return false;
        }
    }

}