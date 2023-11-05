/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveAnimeFromHistory } from './../../messages/commands/RemoveAnimeFromHistory';
import { Inject } from '@nestjs/common';
import { IHistoryAnimeRepository } from 'src/user/domain/repositories/IHistoryAnimeRepository';
@CommandHandler(RemoveAnimeFromHistory)
export class RemoveAnimeFromHistoryCommandHandler implements ICommandHandler<RemoveAnimeFromHistory> {
    constructor(@Inject(IHistoryAnimeRepository) private repository: IHistoryAnimeRepository) { }
    execute(command: RemoveAnimeFromHistory){
        const { animeId, userId } = command;
        return this.repository.removeAnimeFromHistory(animeId, userId);
    } 

}    

