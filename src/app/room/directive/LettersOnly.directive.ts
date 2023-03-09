import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[lettersOnly]',
})
export class LettersOnlyDirective {
    
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    const regex = /^[a-zA-Z]*$/;

    if (!regex.test(key)) {
      event.preventDefault();
    }
  }
}
