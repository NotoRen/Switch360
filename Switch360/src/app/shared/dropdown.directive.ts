import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen:boolean=false;
  @HostListener('document:click', ['$event']) toggleOpen(event:Event){
    if(this.myRef.nativeElement.contains(event.target))
      this.isOpen=!this.isOpen;
    else
    this.isOpen=false
  }

  constructor(private myRef: ElementRef) {

  }

}
