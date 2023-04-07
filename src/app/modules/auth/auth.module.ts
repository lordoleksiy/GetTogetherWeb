import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthpageComponent } from './authpage/authpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthRoutingModule} from "./auth-routing.module";


@NgModule({
  declarations: [
    AuthpageComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
