/* eslint-disable prettier/prettier */

import { CommandBus, IEventHandler,EventsHandler } from "@nestjs/cqrs";
import { SendMessageWelcome } from "src/auth/application/messages/commands/SendMessageWelcome";
import { AccountCreatedEvent } from "src/auth/domain/events/AccountCreatedEvent";

@EventsHandler(AccountCreatedEvent)
export class AccountCreatedHandler implements IEventHandler<AccountCreatedEvent> {
    constructor(
        private readonly _commandBus: CommandBus
    ) {}

    async handle(event: AccountCreatedEvent) {
        this._commandBus.execute(new SendMessageWelcome(event.email));
    }
}