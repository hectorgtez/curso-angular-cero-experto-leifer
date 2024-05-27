import { Component, Input, inject } from '@angular/core';

import { Track } from '@core/interfaces/tracks.interface';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: Track = {
    _id: '',
    album: '',
    cover: '',
    name: '',
    url: '',
    artist: {
      name: '',
      nickname: '',
      nationality: ''
    }
  };

  private _multimediaService = inject(MultimediaService);

  sendPlay(track: Track): void {
    this._multimediaService.trackInfo$.next(track);
  }
}
