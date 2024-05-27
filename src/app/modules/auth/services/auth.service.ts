import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      "email": email,
      "password": password
    }

    return this._http.post(`${ this._apiUrl }/auth/login`, body);
  }
}
