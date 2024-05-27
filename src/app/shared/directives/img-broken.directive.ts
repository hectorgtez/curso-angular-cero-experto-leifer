import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;

  @HostListener('error') handleError(): void {
    const native = this._host.nativeElement;

    if (this.customImg) {
      native.src = this.customImg;
    } else {
      native.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAF1JREFUGFcVzKESgCAQANFFgxileP7/7+gvSDwMHFEMDA5tw5t113X2LQT8svJ9LzkbLsbYLRtyCCkpAzhV7a01nvSwizBPE+6OdzcrHLKjmghDjueIxXtqrZRc+AEqRy+0kNYhzAAAAABJRU5ErkJggg==';
    }
  }

  constructor(private _host: ElementRef) { }
}
