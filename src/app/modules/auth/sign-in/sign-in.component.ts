import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = ''
  password: string = ''

  constructor(private authService: AuthService) {}

  form: FormGroup = new FormGroup({
    email: new FormControl(this.email),
    password: new FormGroup(this.password)
  })

  signIn(){
      this.authService.signIn(this.email, this.password);
  }
}
