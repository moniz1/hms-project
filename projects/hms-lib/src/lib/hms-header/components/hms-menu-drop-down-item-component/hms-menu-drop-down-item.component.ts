import { Component, Input } from '@angular/core';
import { HeaderNavMenu } from "../../models/header-nav-menu";

@Component({
  selector: 'hms-menu-drop-down-item',
  templateUrl: './hms-menu-drop-down-item.component.html',
  styleUrls: ['./hms-menu-drop-down-item.component.css']
})
export class HmsMenuDropDownItemComponent {
  @Input() menuItem: HeaderNavMenu;
}
