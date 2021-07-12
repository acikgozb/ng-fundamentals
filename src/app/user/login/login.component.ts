import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(formValues: any) {
    const {userName, password} = formValues;
    this.authService.loginUser(userName, password);
    this.router.navigate(["events"]);
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
