import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  public multimediaService = inject(MultimediaService);

  $observersList: Subscription[] = [];
  state: string = 'paused';

  ngOnInit(): void {
    const observer$1 = this.multimediaService.playerStatus$
      .subscribe({
        next: (status) => this.state = status
      });
    this.$observersList.push(observer$1);
  }

  ngOnDestroy(): void {
    this.$observersList.forEach(u => u.unsubscribe());
  }

  handlePosition(event: MouseEvent): void {
    const { clientX } = event;

    const elementNative: HTMLElement = this.progressBar.nativeElement;
    const { x, width } = elementNative.getBoundingClientRect();

    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;

    this.multimediaService.seekAudio(percentageFromX);
  }
}
