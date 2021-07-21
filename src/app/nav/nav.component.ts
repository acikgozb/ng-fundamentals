import {Component, OnInit} from '@angular/core';
import {AuthService} from "../user/auth.service";
import {ISession} from "../events/shared/event.model";
import {EventService} from "../events/shared/event.service";

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[] = [];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {
  }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm)
      .subscribe((targetSessions: ISession[]) => {
        this.foundSessions = targetSessions;
        console.log(this.foundSessions);
      });
  }
}
