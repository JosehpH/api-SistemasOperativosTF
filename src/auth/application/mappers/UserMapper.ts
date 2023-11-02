/* eslint-disable prettier/prettier */
import { User } from "src/auth/domain/aggregates/User";
import { UserEntity } from "src/auth/infraestructure/persitence/entities/UserEntity";

export class UserMapper{
    static DomainToEntity(user:User):UserEntity{
        const userEntity:UserEntity = new UserEntity();
        userEntity.email = user.email;
        userEntity.password = user.password;
        return userEntity;
    }
    static EntityToDomain(user: UserEntity): User{
        const userDomain:User = new User(user.email, user.password);
        return userDomain;
    }
}