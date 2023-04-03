import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { INewUser } from 'src/app/models/user/INewUser';
import { passwordMatchValidator } from './matchpassword';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
newUser: INewUser = {
  name: '',
  email: '',
  login: '',
}
password:string = '';

submitted: boolean = false;
form!: FormGroup

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    login: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    confirmPassword: new FormControl("", [Validators.required]),
  },
  {
    validator: passwordMatchValidator
  });

}

  validationThenSignUp() {
    this.submitted = true;
    if (this.form.valid){
      this.SignUp()
    }
  }

  private SignUp(){

  }

  get Email(): FormControl {
      return this.form.get('email') as FormControl;
  }

  get Name(): FormControl {
      return this.form.get('name') as FormControl;
  }


  get Login(): FormControl {
      return this.form.get('login') as FormControl;
  }

  get Password(): FormControl {
      return this.form.get('password') as FormControl;
  }

  get ConfirmPassword(): FormControl {
      return this.form.get('confirmPassword') as FormControl;
  }
}
