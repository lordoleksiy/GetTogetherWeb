import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthpageComponent } from './authpage/authpage.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path:'', component:AuthpageComponent}
]
@NgModule({
  declarations: [
    AuthpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
