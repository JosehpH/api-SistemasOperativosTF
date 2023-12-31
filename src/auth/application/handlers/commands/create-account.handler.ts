/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { User } from 'src/auth/domain/aggregates/User';
import { CreateAccountCommand } from 'src/auth/application/messages/commands/CreateAccountCommand';
import { AccountCreatedEvent } from 'src/auth/domain/events/AccountCreatedEvent';
import { IUserRepository } from 'src/auth/domain/repositories/IUserRepository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';
import { CreateUserProfileByUserId } from 'src/user/application/messages/commands/CreateUserProfileByUserId';

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler implements ICommandHandler<CreateAccountCommand> {

    constructor(@Inject(IUserRepository) private userRepository: IUserRepository, private publisher: EventBus, private commandBus:CommandBus) { }
    
    async execute(command: CreateAccountCommand) {
        let user: User = new User(command.email, command.password);
        user.password = await this.encriptPassword(user.password);
        try {
            user = await this.userRepository.create(user);
            if (user == null) throw new Error('User not created');
            await this.commandBus.execute(new CreateUserProfileByUserId(command.fullName,
            command.lastName, 0, command.avatar, user.id));

            this.publisher.publish(new AccountCreatedEvent(user.email));
        } catch (error) {
            throw new
            Error(`User not created ${error.toString()}`);
        }
        return user;
    }
    async encriptPassword(password: string) {
         const saltRounds = 10; // Número de rondas de sal. 
         const hashedPassword = await bcrypt.hash(password, saltRounds);
         return hashedPassword;
    }
}
