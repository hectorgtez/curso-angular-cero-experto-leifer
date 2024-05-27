import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SessionGuard } from './session.guard';

describe('sessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => SessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
