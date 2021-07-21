//libraries
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import * as jQuery from "jquery";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//modules
import {AppRoutingModule} from './app.routing';
//components
import {EventsAppComponent} from './app.component';
import {EventsListComponent} from './events/events-list/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavComponent} from './nav/nav.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {CreateSessionComponent} from './events/event-details/create-session/create-session.component';
import {SessionListComponent} from './events/event-details/session-list/session-list.component';
import {CollapsableWellComponent} from './core/components/collapsable-well/collapsable-well.component';
import {SimpleModalComponent} from './core/components/simple-modal/simple-modal.component';
import {UpvoteComponent} from './events/event-details/session-list/upvote/upvote.component';
import {JQUERY_TOKEN} from "./core/jquery/j-query.service";
//directives
import {ModalTriggerDirective} from './core/directives/modal-trigger/modal-trigger.directive';
import {LocationValidatorDirective} from './events/create-event/directives/location-validator.directive';
//pipes
import {DurationPipe} from './events/shared/duration.pipe';
//guards
import {canDeactivateCreateEventGuard} from "./events/guards/can-deactivate-create-event/can-deactivate-create-event.guard";
//resolver
import {EventListResolver} from "./events/resolvers/event-list/event-list.resolver";
import {EventResolver} from "./events/resolvers/event/event.resolver";


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    EventListResolver,
    EventResolver,
    {provide: "canDeactivateCreateEvent", useValue: canDeactivateCreateEventGuard},
    {provide: JQUERY_TOKEN, useValue: jQuery},
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {
}
