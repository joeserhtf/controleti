import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams  } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { UserInterface } from "../models/user-interface";
import { json } from "body-parser";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  
  global_api = `http://192.168.6.142:21181`;

  public nvl2 = ['002291'];
  public adm = ['002291', '000001']

  registerUser(name: string, email: string, password: string) {
    const url_api = "https://carajas-tic-dashboard.mybluemix.net/api/Users";
    return this.htttp
      .post<UserInterface>(
        url_api,
        {
          name: name,
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }


  loginuser(user, password){
    const url_api = `http://192.168.0.13:9191/rest/AUTHUSER?USR=${user}&PWD=${password}`;
    return this.htttp.get(url_api)
      .pipe(map(data => data));
  //  const url_api = `${this.global_api}/api/auth/login`;
  //  return this.htttp.post<UserInterface>(url_api, {email, password}, { headers: this.headers })
  //    .pipe(map(data => data)); 

  }

  createToken(app, coduser, versao){
    const url_api = `http://192.168.0.13:9191/rest/ctrver/VALIDAR?APP=${app}&CODUSER=${coduser}&VERSAO=${versao}`;
    return this.htttp.put(url_api, { headers: this.headers })
      .pipe(map(data => data));
  //  const url_api = `${this.global_api}/api/auth/login`;
  //  return this.htttp.post<UserInterface>(url_api, {email, password}, { headers: this.headers })
  //    .pipe(map(data => data)); 

  }

  setUser(user): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    // let accessToken = localStorage.getItem("accessToken");
    // const url_api = `https://carajas-tic-dashboard.mybluemix.net/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    
    // return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }
}