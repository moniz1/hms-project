import { Component } from '@angular/core';
import { AppSideBarModel } from './app-side-bar-model';
import { AppHeaderModel } from "./app-header-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**const side bar */
  sidebarMenuItems = AppSideBarModel;
  /**const header */
  headerModel = AppHeaderModel;
}
