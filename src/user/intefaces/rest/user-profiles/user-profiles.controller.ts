import { GetUserProfileByUserId } from './../../../application/messages/queries/GetUserProfileByUserId';
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-profiles')
@ApiTags('User Profiles')
export class UserProfilesController {
    constructor(private queryBus: QueryBus) { }

    @Get("/:userId")
    async getUserProfile(@Param('userId') userId: string) {
        return this.queryBus.execute(new GetUserProfileByUserId(userId));
    }
}
