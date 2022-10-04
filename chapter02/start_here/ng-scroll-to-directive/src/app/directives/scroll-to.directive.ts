import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  @Input() target = '';
  @HostListener('click') onClick() {
    const targetElement = document.querySelector(this.target);
    console.log(
      'ScrollToDirective -> @HostListener -> targetElement',
      targetElement
    );
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor() {}
}
