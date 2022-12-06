import { Role } from "./role";

export class User {
  constructor(
    public id: number,
    public fullName: string,
    public userName: string,
    public password: string,
    public phoneNumber: string,
    public country: string,
    public location: string,
    public address: string,
    public gender: string,
    public registeredDate: Date,
    public roles: Role[]
  ) 
  {}
}
