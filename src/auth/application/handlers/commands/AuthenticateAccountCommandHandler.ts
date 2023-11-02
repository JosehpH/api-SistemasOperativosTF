/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AuthenticateAccountCommand } from 'src/auth/application/messages/commands/AuthenticateAccountCommand';
import { IUserRepository } from 'src/auth/domain/repositories/IUserRepository';

@CommandHandler(AuthenticateAccountCommand)
export class AuthenticateAccountCommandHandler implements ICommandHandler<AuthenticateAccountCommand>
{
  constructor(
    @Inject(IUserRepository) private userRepository: IUserRepository) {}
    async execute(command: AuthenticateAccountCommand) {
        const user = await this.userRepository.findByEmail(command.email);
        if (user == null) throw new Error('User not found');
        if (user.password!==command.password) throw new Error('Invalid password');
        return user;
  }
}
