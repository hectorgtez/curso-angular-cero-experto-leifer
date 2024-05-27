
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

export const SessionGuard: CanActivateFn = (route, state) => {
  const _cookieService = inject(CookieService);
  const _router = inject(Router);

  return checkCookieSession(_cookieService, _router);
};

function checkCookieSession(_cookieService: CookieService, _router: Router): boolean {
  try {
    const token: boolean = _cookieService.check('token');

    if (!token) {
      _router.navigate(['/','auth']);
    }

    return token;
  } catch (error) {
    console.log('Ups! Algo salió mal...', error);
    return false;
  }
}

