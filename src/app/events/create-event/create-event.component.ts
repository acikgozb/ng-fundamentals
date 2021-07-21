import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IEvent} from "../shared/event.model";
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;

  newEvent = {
    name: "",
    date: "",
    time: "",
    price: "",
    address: "",
    city: "",
    country: "",
    onlineUrl: "",
    imageUrl: ""
  };

  constructor(
    private router: Router,
    private eventService: EventService
  ) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(["/events"]);
  }

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(["/events"]);
    });
  }
}
