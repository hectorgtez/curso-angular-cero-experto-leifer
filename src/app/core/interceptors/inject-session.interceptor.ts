import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

export const InjectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  const _cookieService = inject(CookieService);

  try {
    const token = _cookieService.get('token');
    return next(req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      }));
  } catch (error) {
    console.log('Ups! Algo salió mal...', error);
    return next(req);
  }
};
