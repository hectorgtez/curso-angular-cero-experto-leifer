import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { Track } from '@core/interfaces/tracks.interface';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

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
    const $observer1 = this._trackService.$dataTracksTrending
      .subscribe( response => {
        this.tracksTrending = response;
        this.tracksRandom = response;
      });

    const $observer2 = this._trackService.$dataTracksRandom
      .subscribe( response => {
        this.tracksRandom = [...this.tracksRandom, ...response];
      });

    this.$observersList.push($observer1, $observer2);
  }

  ngOnDestroy(): void {
    this.$observersList.forEach( u => u.unsubscribe() );
  }
}
