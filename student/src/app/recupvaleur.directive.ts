import { Directive,ElementRef,HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appRecupvaleur]',
})
export class RecupvaleurDirective {

  @Input() appRecupvaleur = '';
  @Input() defaultColor = '';

  constructor(private el:ElementRef) {
    //alert(this.appRecupvaleur)
    //this.el.nativeElement.style.backgroundColor = this.appRecupvaleur;
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appRecupvaleur || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor || 'green');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
