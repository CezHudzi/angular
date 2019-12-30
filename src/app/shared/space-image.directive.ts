import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
export class SpaceImageDirective {

  zoom = 1.0;

  constructor() { }

  @HostBinding('style.transform') get scale() {
    return `scale(${this.zoom})`;
  }

  @HostListener('mousemove') sizePlus() {
    console.log('ruch');
    this.zoom += 0.0005;
  }


  @HostListener('mouseout') sizeReset() {
    console.log('reset');
    this.zoom = 1.0;
  }


}
