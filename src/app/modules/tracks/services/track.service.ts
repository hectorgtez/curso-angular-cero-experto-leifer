import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

import * as dataRaw from './../../../data/tracks.json';

import { Track } from '@core/interfaces/tracks.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  $dataTracksTrending: Observable<Track[]> = EMPTY;
  $dataTracksRandom: Observable<Track[]> = EMPTY;

  constructor() {
    const { data }: any = (dataRaw as any).default;

    this.$dataTracksTrending = of(data);
    this.$dataTracksRandom = new Observable( (observer) => {
      const trackExample: Track = {
        _id: 9,
        name: 'El último Beso',
        album: 'El Último Beso',
        url: 'http://',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9a/48/09/9a480987-f892-c3c1-b53b-20b9ada8a5c6/8718857012054.jpg/600x600bf-60.jpg'
      }

      setTimeout( () => {
        observer.next([ trackExample ]);
      }, 4000);
    });
  }
}
