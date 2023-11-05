/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveListReproduction } from '../../messages/commands/RemoveListReproduction';
import { IListReproductionRepository } from 'src/user/domain/repositories/IListReproductionRepository';
import { Inject } from '@nestjs/common';

@CommandHandler(RemoveListReproduction)
export class RemoveListReproductionCommandHandler
  implements ICommandHandler<RemoveListReproduction>
{
  constructor(
    @Inject(IListReproductionRepository)
    private repository: IListReproductionRepository,
  ) {}
  execute(command: RemoveListReproduction) {
    const { listReproductionId } = command;
    return this.repository.RemoveListReproduction(listReproductionId);
  }
}
