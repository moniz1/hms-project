export class ConcreteMenu {
    /**Text to display. */
    text: string;
    /**Indicate if current menu if active. */
    isActive: boolean;
    /**Wrapper classes. */
    classes: string[];
    /**Router link associate with your root app router*/
    routerLink: string; 

    /**Merged wrapper classes of this. */
    wrapperClass() {
        return this.classes.join(' ');
    }

    /**
     * Contructs a menu
     * @param text Text to display.
     * @param routerLink Router link associate with your root app router
     * @param isActive Indicate if current menu if active.
     * @param classes Wrapper classes.
     */
    protected constructor(
        text: string,
        routerLink: string,
        isActive: boolean = false,
        classes: string[] = []
    ) {
        this.text = text;
        this.isActive = isActive;
        this.classes = classes;
        this.routerLink = routerLink;
    }
}
