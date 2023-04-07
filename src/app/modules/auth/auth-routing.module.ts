import {RouterModule, Routes} from "@angular/router";
import {AuthpageComponent} from "./authpage/authpage.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {NgModule} from "@angular/core";

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
