import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { HistoryPageComponent } from './history-page.component';
import { SearchComponent } from '@modules/history/components/search/search.component';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HistoryPageComponent,
        SearchComponent
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
