import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  constructor(private authService: AuthService,
              private userService: UserService) {
    userService.getUsers().subscribe((value)=>{
      console.log(value)
    })
  }
  edit(){

  }
  delete(){
    this.authService.deleteAccount();
  }

  exit(){
    this.authService.leaveSession();
  }
}
