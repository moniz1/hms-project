import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { HeaderNavMenu } from '../models/header-nav-menu';

@Directive({
  selector: '[hmsHeaderNavMenuAttr]'
})
/**Manage attributes of nav menu*/
export class HmsHeaderNavMenuAttrDirective {
  @Input() menuItem :HeaderNavMenu;

  constructor(private el: ElementRef) { 
    
  }

  ngOnInit() {
    //Make it dropdownable
    if(this.menuItem.hasDropDownItems()) {
      this.el.nativeElement.setAttribute('data-toggle', 'dropdown');
      this.el.nativeElement.setAttribute('role', 'button');
      this.el.nativeElement.setAttribute('aria-haspopup', 'true');
      this.el.nativeElement.setAttribute('aria-expanded', 'false');
    }
  }
}
