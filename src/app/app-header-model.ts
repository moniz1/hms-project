import { HeaderNavDropDownMenu, HeaderNavMenu, HeaderNavMenuUser, HeaderModel } from "../../dist/hms-lib";
/**Create fix menu items. */
let createHeaderMenuItems = () => {
  //make dropdown item.
  let headerDropDownMenuItems = [
    new HeaderNavDropDownMenu('Action#1', 'action1'),
    new HeaderNavDropDownMenu('Action#2', 'action2'),
    new HeaderNavDropDownMenu('Divided Action', 'divied-action', true)
  ];

  return [
    new HeaderNavMenu('Home', '', [], true, ['text-success']),
    new HeaderNavMenu('Link', 'link'),
    new HeaderNavMenu('Dropdown', '', headerDropDownMenuItems)
  ];
}

/**Create user menu. */
let createHeaderUserMenuItem = () => {
  //Dropdown with various settings.
  const userDropDownItems = [
    new HeaderNavDropDownMenu('Setting', 'user-setting'),
    new HeaderNavDropDownMenu('Change Password', 'pass-word-change'),
    new HeaderNavDropDownMenu('Sign out', '#', true)
  ];

  return new HeaderNavMenuUser( 'Moniz Nguyen', './assets/img/user_avartar.jpg', '#', userDropDownItems);
}

export const AppHeaderModel = new HeaderModel(
   './assets/img/header_logo.png',
   createHeaderMenuItems(),
   createHeaderUserMenuItem()
)
