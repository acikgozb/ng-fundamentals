//libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { AppRoutingModule } from './app.routing';
//components
import { EventsAppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
//guards
import { EventActivatorGuard } from './events/guards/event-activator/event-activator.guard';
import { canDeactivateCreateEventGuard } from "./events/guards/can-deactivate-create-event/can-deactivate-create-event.guard";
//resolver
import {EventListResolver} from "./events/event-list.resolver";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventActivatorGuard,
    EventListResolver,
    {provide: "canDeactivateCreateEvent", useValue: canDeactivateCreateEventGuard}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
