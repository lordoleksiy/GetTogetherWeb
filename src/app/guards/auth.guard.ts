import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {}

  canActivate(): boolean {
    if (this.authService.isAuthorized()) {
      return true;
    } else {
      this.router.navigate(['/auth/sign-in']);
      this.toastr.info('Please Log In!');
      return false;
    }
  }
}




