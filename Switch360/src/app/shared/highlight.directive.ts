import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  color:any="Red";
  @Input() defaultColor:any="Black";
  @HostBinding('style.borderColor') borderColor:any=this.defaultColor;
  @HostListener('mouseenter') evidenzia(event:Event){
    this.borderColor(this.borderColor || 'red');
  }
  @HostListener('mouseleave')rilascia(event:Event){
    this.borderColor= this.defaultColor;
  }

  ngOnInit() { // this rappresenta la classe corrente
    this.borderColor = this.defaultColor;
  }
   
  constructor() { }

}
