import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { INewUser } from 'src/app/models/user/INewUser';
import { passwordMatchValidator } from './matchpassword';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
newUser: INewUser = {
  name: '',
  email: ''
}
password:string = '';

submitted: boolean = false;
form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    confirmPassword: new FormControl("", [Validators.required]),
  },
  {
    validators: passwordMatchValidator
  });

constructor(private fb: FormBuilder,
            private authService: AuthService,
            private userService: UserService) {}

  validationThenSignUp() {
    this.submitted = true;
    if (this.form.valid){
      this.SignUp()
    }
  }

  private SignUp(){
    this.newUser.email = this.Email.value;
    this.newUser.name = this.Name.value;
    this.password = this.Password.value;

    this.authService.signUp(this.newUser.email, this.password).then(()=>{
    this.userService.createUser(this.newUser).subscribe({
        next: (user) => localStorage.setItem('user', JSON.stringify(user)),
      })
    })
  }

  get Email(): FormControl {
      return this.form.get('email') as FormControl;
  }

  get Name(): FormControl {
      return this.form.get('name') as FormControl;
  }

  get Password(): FormControl {
      return this.form.get('password') as FormControl;
  }

  get ConfirmPassword(): FormControl {
      return this.form.get('confirmPassword') as FormControl;
  }
}
