import { HeaderNavMenu } from "./header-nav-menu";
import { HeaderNavMenuUser } from "./header-nav-menu-user";

export class HeaderModel {
    /** Shows input logo as img link either relative or absolute.*/
    logo: string;
    /** Indicates the number of menu items in the header navbar.*/
    menuItems: HeaderNavMenu[];
    /** Indicate the menu item associates with the user.*/
    menuUser: HeaderNavMenuUser;

    /**
     * Construct a header model.
     * @param logo Shows input logo as img link either relative or absolute.
     * @param menuItems Indicates the menu items in the header navbar.
     * @param menuUser Indicate the menu item associates with the user.
     */
    public constructor(
        logo: string,
        menuItems: HeaderNavMenu[],
        menuUser: HeaderNavMenuUser
    ) {
        this.logo = logo;
        this.menuItems = menuItems;
        this.menuUser = menuUser;
    }
}
