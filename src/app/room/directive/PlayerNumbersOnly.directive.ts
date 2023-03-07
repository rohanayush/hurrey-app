import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[playerNumbersOnly]'
})
export class PlayersNumberOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^1-6]*/g, '');
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}