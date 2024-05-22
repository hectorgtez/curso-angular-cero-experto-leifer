import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { Track } from '@interfaces/tracks.interface';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  private _trackService = inject(TrackService);

  $observersList: Subscription[] = [];
  tracksTrending: Track[] = []
  tracksRandom: Track[] = []

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  ngOnDestroy(): void { }

  loadDataAll(): void {
    this._trackService.getAllTracks$()
      .subscribe( (response: Track[]) => {
        this.tracksTrending = response;
      });
  }

  loadDataRandom(): void {
    this._trackService.getAllRandom$()
      .subscribe( (response: Track[]) => {
        this.tracksRandom = response;
      }, err => {
        console.log('Error de conexión');
      });
  }
}
