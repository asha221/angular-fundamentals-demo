import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightV3]'
})
export class HighlightV3Directive {

  constructor(private el: ElementRef) { }

  @Input('appHighlightV3') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostBinding() class: String = 'some-test-class';

  // HostBinding mainly used to change the properties of the host here <p> is our host. it will change the class name of that <p>

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
