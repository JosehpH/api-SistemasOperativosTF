import { AuthenticateAccountCommandHandler } from './application/handlers/commands/AuthenticateAccountCommandHandler';
/* eslint-disable prettier/prettier */
import { CreateAccountHandler } from './application/handlers/commands/create-account.handler';
import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './infraestructure/persitence/repositories/UserRepository';
import { IUserRepository } from './domain/repositories/IUserRepository';
import { CqrsModule } from '@nestjs/cqrs';
import { SendMessageWelcomeHandler } from './application/handlers/commands/SendMessageWelcomeHandler';
import { AccountCreatedHandler } from './application/handlers/events/AccountCreatedHandler';
import { GetAccountByEmailHandler } from './application/handlers/queries/GetAccountByEmailHandler';
import { UserController } from './interfaces/rest/user/user.controller';
import { UserEntity, UserSchema } from './infraestructure/persitence/entities/UserEntity';
import { ThrottlerModule } from '@nestjs/throttler';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './guards/auth/auth.guard';

export const CommandHandlers = [
  CreateAccountHandler,
  SendMessageWelcomeHandler,
  AuthenticateAccountCommandHandler
];
export const EventHandlers = [AccountCreatedHandler];
export const QueryHandlers = [GetAccountByEmailHandler];

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    CqrsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [UserController],
  providers: [
    { provide: IUserRepository, useClass: UserRepository },
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    UserEntity,
    AuthGuard
  ],
  exports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    AuthGuard
  ],
})
export class AuthModule {}
