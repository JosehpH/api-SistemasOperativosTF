import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './../../../application/dtos/CreateUserDto.dto';
import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAccountCommand } from 'src/auth/application/messages/commands/CreateAccountCommand';
import { GetAccountByEmailQuery } from 'src/auth/application/messages/queries/GetAccountByEmailQuery';
import { UserLoginDto } from 'src/auth/application/dtos/UserLoginDto';
import { AuthenticateAccountCommand } from 'src/auth/application/messages/commands/AuthenticateAccountCommand';
import { Throttle } from '@nestjs/throttler';
import { FileInterceptor } from '@nestjs/platform-express';
import uploadFileToStorage from 'src/shared/services/UploadFiles';
import { UUID } from 'mongodb';

// Configuración de rate limiting para esta ruta específica
@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}
  //@Throttle({ default: { limit: 3, ttl: 60 } })
  @UseInterceptors(FileInterceptor('avatar'))
  @Post('register')
  @ApiOperation({ summary: 'Crea un nuevo user' })
  @ApiBody({ type: CreateUserDto })
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateUserDto,
  ) {
    const avatarUrl = await uploadFileToStorage(file, body.email);
    return this.commandBus.execute(
      new CreateAccountCommand(
        body.email,
        body.password,
        body.first_name,
        body.last_name,
        avatarUrl,
      ),
    );
  }

  //@Throttle({ default: { limit: 5, ttl: 60 } })
  @Post('login')
  @ApiOperation({ summary: 'Login user', description: 'Logeo del usuario' })
  async authAccount(@Body() body: UserLoginDto) {
    return this.commandBus.execute(
      new AuthenticateAccountCommand(body.email, body.password),
    );
  }
}
