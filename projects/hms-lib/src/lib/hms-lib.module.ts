import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HmsHeaderComponent } from './hms-header/hms-header.component';
import { HmsHeaderNavMenuAttrDirective } from './hms-header/directives/hms-header-nav-menu-attr.directive';
import { HmsMenuDropDownItemComponent } from './hms-header/components/hms-menu-drop-down-item-component/hms-menu-drop-down-item.component';
import { HmsSideBarComponent } from './hms-side-bar/hms-side-bar.component';
import { HmsFooterComponent } from './hms-footer/hms-footer.component';
import { HmsLoginFormComponent } from './hms-login-form/hms-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HmsHeaderComponent, 
    HmsHeaderNavMenuAttrDirective, 
    HmsMenuDropDownItemComponent, 
    HmsSideBarComponent, 
    HmsFooterComponent, 
    HmsLoginFormComponent    
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    HmsHeaderComponent, 
    HmsHeaderNavMenuAttrDirective, 
    HmsMenuDropDownItemComponent, 
    HmsSideBarComponent,
    HmsFooterComponent,
    HmsLoginFormComponent]
})
export class HmsLibModule { }
