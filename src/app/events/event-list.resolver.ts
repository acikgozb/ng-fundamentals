//libraries
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
//services
import {EventService} from "./shared/event.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<boolean> {

  constructor(
    private eventService: EventService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.eventService.getEvents()
      .pipe(
        map(events => events)
      )
  }
}
