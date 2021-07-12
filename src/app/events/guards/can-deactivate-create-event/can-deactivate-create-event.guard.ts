import { CreateEventComponent } from '../../create-event/create-event.component';

export function canDeactivateCreateEventGuard(component: CreateEventComponent) {
  return !component.isDirty;
}
