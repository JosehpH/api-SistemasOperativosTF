/* eslint-disable prettier/prettier */
import { User } from "../aggregates/User";
export interface IUserRepository{
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User>;
}
export const IUserRepository = 'IUserRepository';