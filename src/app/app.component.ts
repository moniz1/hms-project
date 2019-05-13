import { Component } from '@angular/core';
import { HeaderModel, HeaderNavDropDownMenu, HeaderNavMenu, HeaderNavMenuUser, SideBarMenu } from "../../dist/hms-lib";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = './assets/img/header_logo.png';
  
  dropDownItems = [
      new HeaderNavDropDownMenu('Action#1', 'action1'),
      new HeaderNavDropDownMenu('Action#2', 'action2'),
      new HeaderNavDropDownMenu('Divided Action', 'divied-action', true)
  ];

  menuItems = [
      new HeaderNavMenu('Home', '', [], true, ['text-success']),
      new HeaderNavMenu('Link', 'link'),
      new HeaderNavMenu('Dropdown', '', this.dropDownItems)
  ]

  userDropDownItems = [
      new HeaderNavDropDownMenu('Setting', 'user-setting'),
      new HeaderNavDropDownMenu('Change Password', 'pass-word-change'),
      new HeaderNavDropDownMenu('Sign out', '#', true)
  ];

  menuUser = new HeaderNavMenuUser(
    'Moniz Nguyen',
    './assets/img/user_avartar.jpg',
    '#',
    this.userDropDownItems
  )

  sidebarMenuItems = [
    new SideBarMenu('Home', 'home',  false),
    new SideBarMenu('Link', 'link'),
    new SideBarMenu('Action#1', 'action1'),
    new SideBarMenu('Action#2', 'action2'),
    new SideBarMenu('Login', 'login')
  ]

  headerModel = new HeaderModel(this.logo, this.menuItems, this.menuUser);
}
