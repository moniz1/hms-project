import { ConcreteMenu } from "../../models/concrete-menu";
export class SideBarMenu extends ConcreteMenu{
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
        isActive: boolean = false,
        classes: string[] = []
    ) {
        super(text, routerLink,isActive, classes);
    }
}
