import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {catchError, from, tap} from "rxjs";
import firebase from 'firebase/compat/app';
import UserCredential = firebase.auth.UserCredential;
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              public jwtHelper: JwtHelperService) { }

  async signIn(email: string, password: string){
      return this.fireAuth.signInWithEmailAndPassword(email, password)
        .then(async (cred) => {
          await this.setToken(cred);
          this.toastr.success('Sign-in successful!', "You are successfully signed in!")
          this.router.navigate(['/profile']);
        })
        .catch(err => {
          this.toastr.error("Error", "Email or password wrong!")
        });
  }

  async signUp(email: string, password: string){
    try {
      const cred = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      await this.setToken(cred);
      this.toastr.success('Sign-up successful!', 'Welcome to our app!');
      this.router.navigate(['/profile']);
      return true;
    } catch (err) {
      this.toastr.error('User with such email is already registered', 'Error');
      return false;
    }
  }
  private async setToken(userCredential: UserCredential){
    const user = userCredential.user;
    if (user) {
      localStorage.setItem('accessToken', await user.getIdToken());
    }
  }

  public isAuthorized():boolean{
    const token = localStorage.getItem('accessToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public leaveSession(){
    localStorage.removeItem('accessToken');
    this.fireAuth.signOut();
    this.router.navigate(['map'])
  }

  public async deleteAccount(){
    const user = await this.fireAuth.currentUser;
    if (user){
      user.delete()
    }
    localStorage.removeItem('accessToken');
    this.router.navigate(['map'])
  }
}
