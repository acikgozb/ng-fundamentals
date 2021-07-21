import {Component} from '@angular/core';
import {AuthService} from "./user/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class EventsAppComponent {
  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.checkAuthenticationStatus()
  }
}
