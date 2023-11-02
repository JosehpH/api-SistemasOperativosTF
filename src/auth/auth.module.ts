import { AuthenticateAccountCommandHandler } from './application/handlers/commands/AuthenticateAccountCommandHandler';
/* eslint-disable prettier/prettier */
import { CreateAccountHandler } from './application/handlers/commands/create-account.handler';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './infraestructure/persitence/repositories/UserRepository';
import { IUserRepository } from './domain/repositories/IUserRepository';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { SendMessageWelcomeHandler } from './application/handlers/commands/SendMessageWelcomeHandler';
import { AccountCreatedHandler } from './application/handlers/events/AccountCreatedHandler';
import { GetAccountByEmailHandler } from './application/handlers/queries/GetAccountByEmailHandler';
import { UserController } from './interfaces/rest/user/user.controller';
import { UserEntity, UserSchema } from './infraestructure/persitence/entities/UserEntity';

export const CommandHandlers = [
  CreateAccountHandler,
  SendMessageWelcomeHandler,
  AuthenticateAccountCommandHandler
];
export const EventHandlers = [AccountCreatedHandler];
export const QueryHandlers = [GetAccountByEmailHandler];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    CqrsModule,
  ],
  controllers: [UserController],
  providers: [
    { provide: IUserRepository, useClass: UserRepository },
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class AuthModule {}
