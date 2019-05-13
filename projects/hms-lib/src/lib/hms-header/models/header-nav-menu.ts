import { ConcreteMenu } from "../../models/concrete-menu";
import { HeaderNavDropDownMenu } from "./header-nav-drop-down-menu";

export class HeaderNavMenu extends ConcreteMenu {
    /**Dropdown items tie to this. */
    public dropDownItems: HeaderNavDropDownMenu[];

    /**Merged wrapper classes of this. */
    public hasDropDownItems() {
        return this.dropDownItems.length > 0;
    }

    /**
     * Contructs a menu
     * @param text Text to display.
     * @param routerLink Router link associate with your root app router
     * @param isActive Indicate if current menu if active.
     * @param classes Wrapper classes.
     * @param dropDownItems Dropdown menu items ties to this. 
     */
    public constructor(
        text: string,
        routerLink: string,
        dropDownItems: HeaderNavDropDownMenu[] = [],
        isActive: boolean = false,
        classes: string[] = []
    ) {
        super(text, routerLink,isActive, classes);
        this.dropDownItems = dropDownItems;
    }
}
