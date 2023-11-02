import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './../../../application/dtos/CreateUserDto.dto';
import { Controller, Post, Get, Body } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAccountCommand } from 'src/auth/application/messages/commands/CreateAccountCommand';
import { GetAccountByEmailQuery } from 'src/auth/application/messages/queries/GetAccountByEmailQuery';
import { UserLoginDto } from 'src/auth/application/dtos/UserLoginDto';
import { AuthenticateAccountCommand } from 'src/auth/application/messages/commands/AuthenticateAccountCommand';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}
  @Post('register')
  @ApiOperation({ summary: 'Crea un nuevo user' })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() body: CreateUserDto) {
    return this.commandBus.execute(
      new CreateAccountCommand(body.email, body.password),
    );
  }
  @Post('login')
  @ApiOperation({ summary: 'Login user', description: 'Logeo del usuario' })
  async authAccount(@Body() body: UserLoginDto) {
    return this.commandBus.execute(
      new AuthenticateAccountCommand(body.email, body.password),
    );
  }
}
