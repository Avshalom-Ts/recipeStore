//Open and Close the menu when click on the button

// import { Directive, HostBinding, HostListener } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })

// export class DropdownDirective{
//     @HostBinding('class.open') isOpen = false;
//     @HostListener('click') toggleOpen() {
//         this.isOpen = !this.isOpen;
//     }
// }

//Open and Close the menu when click on the button and close on click on the DOM
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}