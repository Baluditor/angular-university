import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {
  
  @Input('highlighted')
  isHighlighted: boolean = false;
  
  @Output()
  toggleHighlight = new EventEmitter<boolean>();
  
  constructor() {
  }
  
  // HostBinding is a way to directly interact with
  // the host element where the directive is applied.
  // Here we are using the HostBinding to write to
  // the className DOM property of the host element.
  // HostBinding can be used to write to any DOM
  // property of the host element.
  // We can only write to existing properties with
  // HostBinding
  //
  // @HostBinding('className')
  // get cssClasses(): string {
  //   return 'highlighted';
  // }
  
  @HostBinding('class.highlighted')
  get highlightedClass(): boolean {
    return this.isHighlighted;
  }
  
  //  Above can be written as
  // @HostBinding('class.highlighted')
  // get cssClasses(): boolean {
  //   return true;
  // }
  
  // Add style to host element
  // @HostBinding('style.border')
  // get border(): string {
  //   return '15px solid red';
  // }
  
  // To write to attribute, use this:
  @HostBinding('attr.disabled')
  get disabled(): string {
    return 'true';
  }
  
  // The DOM event we want to listen to as a string.
  // If we want to get other events we need to provide
  // them in an array. For example if we want to get the
  // native event, we should provide the $event like so.
  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    // console.log($event);
    console.log(`mouse entered`);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  
  @HostListener('mouseleave')
  mouseLeave() {
    console.log('mouse left');
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  
}
