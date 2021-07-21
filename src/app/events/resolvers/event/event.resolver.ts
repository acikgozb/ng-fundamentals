import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from "../../shared/event.service";
import {IEvent} from "../../shared/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<IEvent> {

  constructor(
    private eventService: EventService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent> {
    const eventId = parseInt(route.params["id"]);

    return this.eventService.getEvent(+eventId);
  }
}
