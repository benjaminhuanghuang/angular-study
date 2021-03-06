import {
  Directive,
  Input,
  HostListener,
  HostBinding,
  ElementRef
} from "@angular/core";

/*
  Used in recipe-detail
*/
@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  // when isOpen == true, bind class 'open' to host
  @HostBinding("class.open") isOpen: boolean = false;

  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
