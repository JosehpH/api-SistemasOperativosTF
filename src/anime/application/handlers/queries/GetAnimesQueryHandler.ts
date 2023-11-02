/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAnimesQuery } from './../../messages/queries/GetAnimesQuery';
import { IAnimeRepository, IAnimeRespository } from 'src/anime/domain/repositories/IAnimeRepository';
import { Inject } from '@nestjs/common';

@QueryHandler(GetAnimesQuery)
export class GetAnimesQueryHandler implements IQueryHandler<GetAnimesQuery>{
    constructor(@Inject(IAnimeRepository)private animeRepository:IAnimeRespository) {}
    async execute(query: GetAnimesQuery) {
        return this.animeRepository.getAnimes();
    }

}