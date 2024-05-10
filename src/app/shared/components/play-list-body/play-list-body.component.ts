import { Component, OnInit } from '@angular/core';
import * as dataRaw from './../../../data/tracks.json';
import { Track } from '@core/interfaces/tracks.interface';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {
  tracks: Track[] = [];
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' };

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;

    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
