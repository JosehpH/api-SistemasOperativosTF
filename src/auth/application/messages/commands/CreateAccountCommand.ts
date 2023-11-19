/* eslint-disable prettier/prettier */
export class CreateAccountCommand {
    constructor(
        public readonly email: string,
        public readonly password: string,
        public readonly fullName: string,
        public readonly lastName: string,
        public readonly avatar: string
    ) {}
}
