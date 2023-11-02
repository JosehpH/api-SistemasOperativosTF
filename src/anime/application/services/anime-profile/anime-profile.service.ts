/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetProfileAnimeByIdQuery } from '../../messages/queries/GetProfileAnimeById';
import { ObjectId } from 'mongoose';

@Injectable()
export class AnimeProfileService {
    constructor(private QueryBus: QueryBus) { }
    async getAnimeProfileByAnimeId(id: string) {
        const query: GetProfileAnimeByIdQuery = new GetProfileAnimeByIdQuery(id);
        return await this.QueryBus.execute(query);
    }
}
