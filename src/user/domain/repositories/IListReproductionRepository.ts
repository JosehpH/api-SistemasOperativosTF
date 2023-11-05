/* eslint-disable prettier/prettier */
import { ListReproduction } from "../aggregates/ListReproduction";

export const IListReproductionRepository = "IListReproductionRepository";
export interface IListReproductionRepository { 
    createListReproduction(listReproduction:ListReproduction);
    RemoveListReproduction(ListReproductionId: string);
    getAllListReproductionByUserId(userId: string);
}