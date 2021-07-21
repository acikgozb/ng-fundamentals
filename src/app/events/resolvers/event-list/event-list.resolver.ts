//libraries
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
//services
import {EventService} from "../../shared/event.service";

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<boolean> {

  constructor(
    private eventService: EventService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.eventService.getEvents();
  }
}
