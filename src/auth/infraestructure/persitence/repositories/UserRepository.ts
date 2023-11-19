/* eslint-disable prettier/prettier */
import { User } from 'src/auth/domain/aggregates/User';
import { IUserRepository } from './../../../domain/repositories/IUserRepository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../entities/UserEntity';
import { UserMapper } from 'src/auth/application/mappers/UserMapper';
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserEntity.name) private readonly userModel: Model<UserEntity>,
  ) {}

  async create(user: User): Promise<User> {

    let newUser = await this.userModel.create(UserMapper.DomainToEntity(user));
    newUser = await newUser.save();
    return UserMapper.EntityToDomain(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email: email }).select('_id email password').exec();
    return UserMapper.EntityToDomain(user);
  }
}
