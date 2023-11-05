/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { UserProfile } from 'src/user/domain/aggregates/UserProfile';
import { IUserProfileRepository } from 'src/user/domain/repositories/IUserProfileRepository';
import { UserProfileEntity } from '../persistence/UserProfileEntity';
import { Model } from 'mongoose';
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';
import { UserProfileMapper } from 'src/user/application/mappers/UserProfileMapper';

export class UserProfileRepository implements IUserProfileRepository {
  constructor(
    @InjectModel(UserProfileEntity.name)
    private media: Model<UserProfileEntity>,
    @InjectModel(UserEntity.name) private userRepository: Model<UserEntity>,
  ) {}
  getUserProfileByUserId(userId: string) {
    return this.media.findOne({ user: { _id: userId } }).exec();
  }

  async createUserProfile(userProfile: UserProfile) {
    const userProfileAdd = await this.media.create(
      UserProfileMapper.toEntity(userProfile)
    );
    userProfileAdd.save();
  }
}
