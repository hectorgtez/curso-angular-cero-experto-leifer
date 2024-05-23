
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthService } from '@modules/auth/services/auth.service';

export const SessionGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  return _authService.checkCookieSession();
};
