import { HeaderNavMenu } from "./header-nav-menu";
import { HeaderNavDropDownMenu } from "./header-nav-drop-down-menu";

/**User menu for header nav. */
export class HeaderNavMenuUser extends HeaderNavMenu{
    /**User image to display. */
    avatar: string;

    /**
     * Contructs a menu
     * @param text Text to display.
     * @param avatar User image to display.
     * @param routerLink Router link associate with your root app router
     * @param isActive Indicate if current menu if active.
     * @param classes Wrapper classes.
     * @param dropDownItems Dropdown menu items ties to this. 
     */
    public constructor(
        text: string,
        avatar: string,
        routerLink: string,
        dropDownItems: HeaderNavDropDownMenu[] = [],
        isActive: boolean = false,
        classes: string[] = []
    ) {
        super(text, routerLink, dropDownItems,isActive, classes);
        this.avatar = avatar;
    }
}
