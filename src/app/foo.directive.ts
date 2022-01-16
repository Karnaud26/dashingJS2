import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective {

  constructor(eltRef : ElementRef, renderer: Renderer2) { 
      renderer.setStyle(eltRef.nativeElement, 'color','yellow');
  }

}
