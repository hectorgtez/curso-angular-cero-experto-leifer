import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  private _searchService = inject(SearchService);

  public listResults$: Observable<any> = of([]);

  ngOnInit(): void {
    this.receiveData('');
  }

  receiveData(event: string): void {
    this.listResults$ = this._searchService.searchTracks$(event);
  }
}
