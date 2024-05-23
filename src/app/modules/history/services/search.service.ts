import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _http = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;

  constructor() { }

  searchTracks$(term: string): Observable<any> {
    return this._http.get(`${ this._apiUrl }/tracks?src=${ term }`)
      .pipe(
        map( (dataRaw: any) => dataRaw.data )
      );
  }
}
