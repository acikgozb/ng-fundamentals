import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";

interface LoginResponse {
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: User;

  constructor(
    private http: HttpClient
  ) {
  }

  loginUser(userName: string, password: string) {
    const credentials = {
      username: userName,
      password: password
    };

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<LoginResponse>("/api/login", credentials, options)
      .pipe(
        tap((data) => {
          this.currentUser = data["user"];
        }),
        catchError(() => {
          return of(false);
        })
      );
  }

  logout() {
    this.currentUser = {
      id: -1,
      firstName: "",
      lastName: "",
      userName: ""
    };

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post("/api/logout", {}, options);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  checkAuthenticationStatus() {
    return this.http.get("/api/currentIdentity")
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <User>data;
          }
        })
      )
      .subscribe();
  }
}
