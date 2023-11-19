/* eslint-disable prettier/prettier */
import { AggregateRoot } from '@nestjs/cqrs';
export class User extends AggregateRoot {
  public id: string;
  public email: string;
    public password: string;
    
  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
  }
}
