import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  submitted: boolean = false
  email: string = ''
  password: string = ''


  form: FormGroup = new FormGroup({
    email: new FormControl(this.email),
    password: new FormGroup(this.password)
  })

  signIn(){
    this.submitted = true;
    console.log(this.password)
  }
}
