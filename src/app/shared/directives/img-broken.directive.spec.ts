import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBrokenDirective } from './img-broken.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<img appImgBroken [src]="srcMock" class="testing-directive"/>`
})
class TestComponent {
  public srcMock: any = null;
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('should instance TestComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should change image to base64', (done: DoneFn) => {
    // Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    const beforeImgSrc = beforeImgElement.src;

    // Act
    component.srcMock = undefined;
    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      const afterImgSrc = beforeImgElement.src;

      // Assert
      expect(afterImgSrc).toMatch(/\bdata:image\b/);
      done();
    }, 3000);

  });
});
