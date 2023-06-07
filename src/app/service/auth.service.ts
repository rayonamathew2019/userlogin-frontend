import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Auth } from '../model/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';

  constructor(private http : HttpClient) { 

    this.loginUrl = "http://localhost:8080/auth/login";
    this.signUpUrl = "http://localhost:8080/auth/register";
  }

  login(user : Auth) : Observable<any>{
    return this.http.post<any>(this.loginUrl, user);
  }
  signUp(user : Auth) : Observable<any>{
    return this.http.post<any>(this.signUpUrl, user);
  }

}
