/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUserProfileByUserId } from "../../messages/queries/GetUserProfileByUserId";
import { IUserProfileRepository } from "src/user/domain/repositories/IUserProfileRepository";
import { Inject } from "@nestjs/common";

@QueryHandler(GetUserProfileByUserId)
export class GetUserProfileUserIdQueryHandler implements IQueryHandler<GetUserProfileByUserId>{
    constructor(@Inject(IUserProfileRepository) private repository:IUserProfileRepository){}
    execute(query: GetUserProfileByUserId){
        const { userId } = query;
        return this.repository.getUserProfileByUserId(userId);
    }
    
}