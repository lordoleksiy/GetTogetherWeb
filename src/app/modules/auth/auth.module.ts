import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthpageComponent } from './authpage/authpage.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';


const routes:Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: '',
    component: AuthpageComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        pathMatch: 'prefix'
      }
    ],
  },
]
@NgModule({
  declarations: [
    AuthpageComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
