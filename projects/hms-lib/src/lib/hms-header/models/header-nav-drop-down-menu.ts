import { ConcreteMenu } from "../../models/concrete-menu";

export class HeaderNavDropDownMenu extends ConcreteMenu {
    /**Indicates if this dropdown item starts with a divider. */
    hasDivider: boolean;
    /**
     * Contructs a menu
     * @param text Text to display.
     * @param routerLink Router link associate with your root app router
     * @param hasDivider Indicates if this dropdown item starts with a divider 
     * @param isActive Indicate if current menu if active.
     * @param classes Wrapper classes.
     */
    public constructor(
        text: string,
        routerLink: string,
        hasDivider: boolean = false,
        isActive: boolean = false,
        classes: string[] = []
    ) {
        super(text, routerLink,isActive, classes);
        this.hasDivider = hasDivider;
    }
}
