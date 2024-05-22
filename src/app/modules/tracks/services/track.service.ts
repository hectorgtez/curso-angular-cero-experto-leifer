import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, catchError, map, mergeMap, of } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { Track } from '../../../core/interfaces/tracks.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private _http = inject(HttpClient);
  private readonly _apiUrl = environment.apiUrl;

  constructor() { }

  getAllTracks$(): Observable<any> {
    return this._http.get(`${ this._apiUrl }/tracks`)
      .pipe( map( (resp: any) => resp.data ) );
  }

  getAllRandom$(): Observable<any> {
    return this._http.get(`${ this._apiUrl }/tracks`)
      .pipe(
        mergeMap( ({ data }: any) => this.skipById(data, 2)),
        catchError( error => {
          const { status, statusText } = error;
          console.log('Ups! Algo salió mal...', [status, statusText]);
          return of([]);
        }),
        // map( (revertedData: any) => {
        //   return revertedData.filter( (track: Track) => track._id !== 1)
        // })
      );
  }

  skipById(listTracks: Track[], id: number): Promise<Track[]> {
    return new Promise( (resolve, reject) => {
      const listTmp = listTracks.filter( a => a._id !== id );
      resolve(listTmp);
    })
  }
}
