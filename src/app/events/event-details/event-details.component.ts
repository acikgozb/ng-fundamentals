import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from "../shared/event.model";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  isAddingSession: boolean = false;
  filterBy: string = "all";
  sortBy: string = "name";

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.event = data["event"];
      this.isAddingSession = false;
    });
  }

  changeFilterKey(newFilterKey: string): void {
    this.filterBy = newFilterKey;
  }

  changeSortKey(newSortKey: string): void {
    this.sortBy = newSortKey;
  }

  enableAddingSession() {
    this.isAddingSession = true;
  }

  disableAddingSession() {
    this.isAddingSession = false;
  }

  saveNewSession(newSession: ISession) {
    const maxSessionId = Math.max.apply(
      null,
      this.event.sessions.map(session => session.id)
    );

    newSession.id = maxSessionId + 1;

    this.event.sessions.push(newSession);
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.disableAddingSession();
    });
  }
}
