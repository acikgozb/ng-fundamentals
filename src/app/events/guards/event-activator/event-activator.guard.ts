import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventService } from '../../shared/event.service';

@Injectable()
export class EventActivatorGuard implements CanActivate {

  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventId = parseInt(route.params["id"]);
    const targetEvent = !!this.eventService.getEvent(eventId);

    if(!targetEvent) {
      this.router.navigate(["404"]);
      return of(false);
    }

    return of(true);
  }

}
