/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserProfileByUserId } from './../../messages/commands/CreateUserProfileByUserId';
import { IUserProfileRepository } from 'src/user/domain/repositories/IUserProfileRepository';
import { Inject, Logger } from '@nestjs/common';
import { UserProfile } from 'src/user/domain/aggregates/UserProfile';

@CommandHandler(CreateUserProfileByUserId)
export class CreateUserProfileByUserIdCommandHandler
  implements ICommandHandler<CreateUserProfileByUserId>
{
  constructor(
    @Inject(IUserProfileRepository) private repository: IUserProfileRepository,
  ) {}
  execute(command: CreateUserProfileByUserId) {
    Logger.log("Creando perfil de usuario")
    const profileUser: UserProfile = new UserProfile();
    profileUser.name = command.name;
    profileUser.lastname = command.lastname;
    profileUser.age = command.age;
    profileUser.image = command.image;
    profileUser.userId = command.userId;
    return this.repository.createUserProfile(profileUser);
  }
}
