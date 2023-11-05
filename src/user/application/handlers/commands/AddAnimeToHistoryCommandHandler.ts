/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddAnimeToHistory } from "../../messages/commands/AddAnimeToHistory";
import { Inject } from "@nestjs/common";
import { IHistoryAnimeRepository } from "src/user/domain/repositories/IHistoryAnimeRepository";

@CommandHandler(AddAnimeToHistory)
export class AddAnimeToHistoryCommandHandler implements ICommandHandler<AddAnimeToHistory>{
    constructor(@Inject(IHistoryAnimeRepository) private repository: IHistoryAnimeRepository) { }
    execute(command: AddAnimeToHistory) {
        const { animeId, userId } = command;
        return this.repository.addAnimeToHistory(animeId, userId);
    }
    
}