import { Injectable } from '@angular/core';
import {HttpService} from "./http-service";
import {IUser} from "../models/user/IUser";
import {INewUser} from "../models/user/INewUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public routePrefix = 'User';
  constructor(private httpService: HttpService) { }
  getUsers(){
    return this.httpService.get<IUser[]>(this.routePrefix)
  }

  getUser(id: number){
    return this.httpService.getById<IUser>(this.routePrefix, id)
  }

  createUser(newUser: INewUser){
    return this.httpService.post<IUser>(this.routePrefix, newUser);
  }
}
