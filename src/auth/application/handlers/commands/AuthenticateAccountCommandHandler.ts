/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AuthenticateAccountCommand } from 'src/auth/application/messages/commands/AuthenticateAccountCommand';
import { IUserRepository } from 'src/auth/domain/repositories/IUserRepository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@CommandHandler(AuthenticateAccountCommand)
export class AuthenticateAccountCommandHandler
  implements ICommandHandler<AuthenticateAccountCommand>
{
  constructor(
    @Inject(IUserRepository) private userRepository: IUserRepository,
    private jwtService: JwtService,
  ) {}
  async execute(command: AuthenticateAccountCommand) {
    const user = await this.userRepository.findByEmail(command.email);
    if (user == null) throw new Error('User not found');
    const isMatch = await this.comparePasswords(
      command.password,
      user.password,
    );
    if (!isMatch) throw new Error('Invalid credentials');
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user_id: user.id,
    };
  }
  async comparePasswords(plainTextPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
