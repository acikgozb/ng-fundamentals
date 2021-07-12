import { TestBed } from '@angular/core/testing';

import { EventActivatorGuard } from './event-activator.guard';

describe('EventActivatorGuard', () => {
  let guard: EventActivatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventActivatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
