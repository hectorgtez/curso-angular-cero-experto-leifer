import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  private _host = inject(ElementRef);

  @HostListener('error') handleError(): void {
    const native = this._host.nativeElement;
    native.src = this.customImg;
  }

  constructor() { }

}
