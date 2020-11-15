import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment'
import jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  constructor(private http:HttpClient) { }

  private isUserAuthenticated=false;
  private userToken=null;
  private userDetails=null;

  getUserAuthenticationStatus()
  {
    return this.isUserAuthenticated;
  }
  getUserToken()
  {
    return this.userToken;
  }
  setUserToken(token)
  {
    this.userToken=token;
    if(token)
    {
      this.decodeToken(token);

    }
  }
  decodeToken(token)
  {
    const decoded= jwt_decode(token);
    console.log(decoded);
    this.userDetails=decoded;
  }
  setAuthenticationStatus(status:boolean)
  {
    this.isUserAuthenticated=status;
  }

  login(payload)
  {
   return this.http.post<any>(environment.apiEndPoint+'api/user/login',payload);
  }
  register(payload)
  {
   return this.http.post<any>(environment.apiEndPoint+'api/user/signup',payload);
  }

}
