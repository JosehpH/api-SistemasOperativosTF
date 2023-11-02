/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAccountByEmailQuery } from '../../messages/queries/GetAccountByEmailQuery';
import { IUserRepository } from 'src/auth/domain/repositories/IUserRepository';

@QueryHandler(GetAccountByEmailQuery)
export class GetAccountByEmailHandler
  implements IQueryHandler<GetAccountByEmailQuery>
{
constructor(@Inject(IUserRepository) private userRepository: IUserRepository) { }
    
  async execute(query: GetAccountByEmailQuery) {
    const user = await this.userRepository.findByEmail(query.email);
    if (user == null) throw new Error('User not found');
    return user;
  }
}
