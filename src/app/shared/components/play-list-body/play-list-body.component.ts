import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@core/interfaces/tracks.interface';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Track[] = [];
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' };

  ngOnInit(): void { }

  changeSort(property: string): void {
    const { order } = this.optionSort;

    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
