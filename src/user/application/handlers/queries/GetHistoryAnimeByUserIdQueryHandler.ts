/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetHistoryAnimeByUserId } from "../../messages/queries/GetHistoryAnimeByUserId";
import { IHistoryAnimeRepository } from "src/user/domain/repositories/IHistoryAnimeRepository";
import { Inject } from "@nestjs/common";

@QueryHandler(GetHistoryAnimeByUserId)
export class GetHistoryAnimeByUserIdQueryHandler implements IQueryHandler<GetHistoryAnimeByUserId>{
    constructor(@Inject(IHistoryAnimeRepository) private repository: IHistoryAnimeRepository) {
}
    execute(query: GetHistoryAnimeByUserId){
        const { userId } = query;
        return this.repository.getAllAnimesByUserId(userId);
    }

}