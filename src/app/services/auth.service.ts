import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  
  global_api = `http://192.168.4.225:21181`;

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


  loginuser(email, password){
    const url_api = `${this.global_api}/api/auth/login`;
    return this.htttp.post<UserInterface>(url_api, {email, password}, { headers: this.headers})
      .pipe(map(data => data)); 
  }

  setUser(user: UserInterface): void {
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