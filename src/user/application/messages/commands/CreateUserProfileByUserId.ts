/* eslint-disable prettier/prettier */
export class CreateUserProfileByUserId {
  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public image: string,
    public userId: string,
  ) {}
}
