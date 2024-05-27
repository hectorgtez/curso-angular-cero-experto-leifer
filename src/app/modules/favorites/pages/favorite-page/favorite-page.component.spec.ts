import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePageComponent } from './favorite-page.component';
import { SharedModule } from '@shared/shared.module';

describe('FavoritePageComponent', () => {
  let component: FavoritePageComponent;
  let fixture: ComponentFixture<FavoritePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritePageComponent],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
