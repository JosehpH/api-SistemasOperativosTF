/* eslint-disable prettier/prettier */
export class CreateNotificationCommand{
    constructor(
        public userId: string,
        public message: string,
        public read: boolean,
  ) {}
}