import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http = inject(HttpClient);
  private _cookieService = inject(CookieService);
  private _router = inject(Router);
  private readonly _apiUrl = environment.apiUrl;

  constructor() { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      "email": email,
      "password": password
    }

    return this._http.post(`${ this._apiUrl }/auth/login`, body)
      .pipe(
        tap( ({ tokenSession }: any) => this._cookieService.set('token', tokenSession, 4, '/'))
      );
  }

  checkCookieSession(): boolean {
    try {
      const token: boolean = this._cookieService.check('token');

      if (!token) {
        this._router.navigate(['/','auth']);
      }

      return token;
    } catch (error) {
      console.log('Ups! Algo salió mal...', error);
      return false;
    }
  }
}
