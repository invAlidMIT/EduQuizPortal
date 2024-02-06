import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/auth/currentUser`, { headers });
  }


  public tokenGeneration(loginDetails:any){

    return this.http.post(`${baseUrl}/auth/login`,loginDetails);
  }

  public tokenInLocalStorage(token:any){

    localStorage.setItem("token",token);
    return true;
  }

  public isUserLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr=='' || tokenStr==null || tokenStr==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
  }

  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr=='' || userStr==null || userStr==undefined){
      this.logout();
      return null;
    }
    else{
      return JSON.parse(userStr);
    }
  }

  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

}
