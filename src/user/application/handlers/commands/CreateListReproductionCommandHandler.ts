/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateListReproduction } from "../../messages/commands/CreateListReproduction";
import { IListReproductionRepository } from "src/user/domain/repositories/IListReproductionRepository";
import { Inject } from "@nestjs/common";
import { ListReproduction } from "src/user/domain/aggregates/ListReproduction";

@CommandHandler(CreateListReproduction)
export class CreateListReproductionCommandHandler
  implements ICommandHandler<CreateListReproduction>
{
  constructor(
    @Inject(IListReproductionRepository)
    private repository: IListReproductionRepository,
  ) {}
  execute(command: CreateListReproduction) {
      const listReproduction = new ListReproduction();
      listReproduction.name = command.name;
      listReproduction.userId = command.userId;
      listReproduction.description = command.description;
     return this.repository.createListReproduction(listReproduction);
  }
}