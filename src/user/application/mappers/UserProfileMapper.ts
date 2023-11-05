/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
import { UserProfile } from "src/user/domain/aggregates/UserProfile";
import { UserProfileEntity } from "src/user/infraestructure/persistence/UserProfileEntity";

export class UserProfileMapper{
    static toEntity(userProfile: UserProfile):UserProfileEntity{
        const userProfileEntity = new UserProfileEntity();
        userProfileEntity.name = userProfile.name;
        userProfileEntity.lastname = userProfile.lastname;
        userProfileEntity.image = userProfile.image;
        userProfileEntity.age = userProfile.age;
        userProfileEntity.user = new Types.ObjectId(userProfile.userId);
        return userProfileEntity;
    }
    static toModel(userProfileEntity: UserProfileEntity, userId:string): UserProfile {
        const userProfile = new UserProfile();
        userProfile.name = userProfileEntity.name;
        userProfile.lastname = userProfileEntity.lastname;
        userProfile.image = userProfileEntity.image;
        userProfile.age = userProfileEntity.age;
        userProfile.userId = userId;
        return userProfile;
    }   
}