/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';
import { ListReproduction } from 'src/user/domain/aggregates/ListReproduction';
import { ListReproductionEntity } from 'src/user/infraestructure/persistence/ListReproductionEntity';

export class ListReproductionMapper {
  static toEntity(
    listReproduction: ListReproduction,
  ): ListReproductionEntity {
    const listReproductionEntity = new ListReproductionEntity();
      listReproductionEntity.name = listReproduction.name;
      listReproductionEntity.description = listReproduction.description;
      listReproductionEntity.user = new Types.ObjectId(listReproduction.userId);
    return listReproductionEntity;
  }
  static toModel(
    listReproductionEntity: ListReproductionEntity, userId:string): ListReproduction {
      const listReproduction = new ListReproduction();
      listReproduction.name = listReproductionEntity.name;
      listReproduction.description = listReproductionEntity.description;
        listReproduction.userId = userId;
      return listReproduction;
  }
}
