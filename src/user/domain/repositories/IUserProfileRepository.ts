/* eslint-disable prettier/prettier */
import { UserProfile } from "../aggregates/UserProfile";

export const IUserProfileRepository = "IUserProfileRepository";
export interface IUserProfileRepository {
    createUserProfile(userProfile: UserProfile);
    getUserProfileByUserId(userId: string);
}