import {Component, OnInit} from '@angular/core';
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

  isLoginInvalid = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  login(formValues: any) {
    const {userName, password} = formValues;
    this.authService.loginUser(userName, password)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(["events"]);
        } else {
          this.isLoginInvalid = true;
        }
      });

  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
