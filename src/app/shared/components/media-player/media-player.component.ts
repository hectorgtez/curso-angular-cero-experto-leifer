import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { Track } from '@core/interfaces/tracks.interface';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  private _multimediaService = inject(MultimediaService);

  $observersList: Subscription[] = [];
  mockCover: Track = {
    cover: 'https://i.scdn.co/image/ab67616d0000b2732d1f4980561c7b2a9920c700',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  ngOnInit(): void {
    const $observer1: Subscription = this._multimediaService.callback
      .subscribe( (response: Track) => {
        console.log('Recibiendo canción:', response);
      });

    this.$observersList.push($observer1);
  }

  ngOnDestroy(): void {
    this.$observersList.forEach(u => u.unsubscribe());
  }
}
