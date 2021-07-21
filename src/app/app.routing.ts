//libraries
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//components
import {EventsListComponent} from './events/events-list/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {CreateSessionComponent} from "./events/event-details/create-session/create-session.component";
//resolvers
import {EventListResolver} from "./events/resolvers/event-list/event-list.resolver";
import {EventResolver} from "./events/resolvers/event/event.resolver";

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {events: EventListResolver}
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: {event: EventResolver}
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "",
    redirectTo: "events",
    pathMatch: "full"
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(module => module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
