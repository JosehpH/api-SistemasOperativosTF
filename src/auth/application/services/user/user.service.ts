import { UserLoginDto } from './../../dtos/UserLoginDto';
import { CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { CreateAccountCommand } from 'src/auth/application/messages/commands/CreateAccountCommand';
import { AuthenticateAccountCommand } from 'src/auth/application/messages/commands/AuthenticateAccountCommand';

@Injectable()
export class UserService {
  constructor(private commandBus: CommandBus) {}
  async createAccount(
    email: string,
    password: string,
    fullName: string,
    lastName: string,
    avatar: string,
  ) {
    return this.commandBus.execute(
      new CreateAccountCommand(email, password, fullName, lastName, avatar),
    );
  }
  async login(userLoginDto: UserLoginDto) {
    return this.commandBus.execute(
      new AuthenticateAccountCommand(userLoginDto.email, userLoginDto.password),
    );
  }
}
