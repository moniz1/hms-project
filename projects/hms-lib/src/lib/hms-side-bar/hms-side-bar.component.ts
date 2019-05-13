import { Component, Input } from '@angular/core';
import { SideBarMenu } from "./models/side-bar-menu";

@Component({
  selector: 'hms-side-bar',
  templateUrl: './hms-side-bar.component.html',
  styleUrls: ['./hms-side-bar.component.css']
})
export class HmsSideBarComponent {
  @Input() menuItems: SideBarMenu[];

}
