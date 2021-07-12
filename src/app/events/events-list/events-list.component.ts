//libraries
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//interfaces
import {IEvent} from "../shared/event.model";


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data["events"];
  }
}
