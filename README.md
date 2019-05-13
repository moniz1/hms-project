# HmsProject

This project was built to test the libraries implementation, clone the code & run it by the following command.

`npm start`

## Library

[npm](#https://www.npmjs.com/package/hms-lib)

## Guide

### Header Component

1. Define a header [model](#headermodel).
1. Map to your component's property.
1. Add `<hms-header [headerModel]="headerModel"></hms-header>` to your template.

### Sidebar

1. Define an array of [SideBarMenu](#sidebarmenu).
1. Map to your component's property.
1. Add `<hms-side-bar [menuItems]="sidebarMenuItems"></hms-side-bar>` to your template.

### Footer Component

Simply add <hms-footer></hms-footer> to a template.

### Login Component

1. Define a login view [model](#loginviewmodel) 
1. Define a method onSubmit with param as [LoginModel](#loginmodel).
1. Map to your component's property.
1. Add `<hms-login-form [loginViewModel]="loginViewModel" (onSubmitEmitter)="onSubmit($event)"></hms-login-form>`
1. As valid submit it fires onSubmit method.

### Models
#### ConcreteMenu
Concrete class for inheritance of the lib's menu classes.

```
/**Text to display. */
text: string;
/**Indicate if current menu if active. */
isActive: boolean;
/**Wrapper classes. */
classes: string[];
/**Router link associate with your root app router*/
routerLink: string;
/**Merged wrapper classes of this. */
wrapperClass(): string;
```

Simple properties & method as mentioned in comment.

#### HeaderModel
Header model, the input for [Header Component](#header-component) to generate responsive header.

```
/**
 * Construct a header model.
 * @param logo Shows input logo as img link either relative or absolute link.
 * @param menuItems Indicates the menu items in the header navbar dynamically generated by the component.
 * @param menuUser Indicate the menu item associates with the user.
 */
constructor(logo: string, menuItems: HeaderNavMenu[], menuUser: 
);
```
Inputs:
logo as an image link.
menuItems as an array of `HeaderNavMenu` for dynamically generated by the component.
menuUser as the menu ties to user.

Scroll down for information about [HeaderNavMenu](#headernavmenu), [HeaderNavMenuUser](#headernavmenuuser).

#### HeaderNavMenu
Header menu item, contains indicators of how to generate a menu by a given instance. Check [Header Component](#header-component) & [Sidebar](#sidebar).

Inherit [ConcreteMenu](#concretemenu), added dropDownItems property & hasDropDownItems method.

```
/**Dropdown items tie to this. */
dropDownItems: HeaderNavDropDownMenu[];
/**Merged wrapper classes of this. */
hasDropDownItems(): boolean;
/**
 * Contructs a menu
 * @param text Text to display.
 * @param routerLink Router link associate with your root app router
 * @param isActive Indicate if current menu if active.
 * @param classes Wrapper classes.
 * @param dropDownItems Dropdown menu items ties to this.
 */
constructor(text: string, routerLink: string, dropDownItems?: HeaderNavDropDownMenu[], isActive?: boolean, classes?: string[]);
```

Inputs
dropDownItems as an array of [HeaderNavDropDownMenu](#headernavdropdownmenu) for header dropdown menu generation, **Incase: the menu has dropDownItems, routerLink will be skipped.**
&
Simple inputs as mentioned in comment.

#### HeaderNavDropDownMenu
Dropdown menu, this says that the component should render dropdown menu for any [HeaderNavMenu](#headernavmenu) has any instance of this.

Inherit [ConcreteMenu](#concretemenu), added hasDivider property;

```
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
constructor(text: string, routerLink: string, hasDivider?: boolean, isActive?: boolean, classes?: string[]);
```
Simple inputs as mentioned in comment.

#### HeaderNavMenuUser
User dropdown menu in header component.

Inherit [ConcreteMenu](#concretemenu), added avatar property;

```
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
constructor(text: string, avatar: string, routerLink: string, dropDownItems?: HeaderNavDropDownMenu[], isActive?: boolean, classes?: string[]);
```
dropDownItems plays same role as [HeaderNavMenu](#headernavmenu).
Simple inputs as mentioned in comment.

#### SideBarMenu

Input to the [SideBar](#sidebar) component for dynamically side bar menu generation.
Inherit [ConcreteMenu](#concretemenu), No any further member.
```
/**
* Contructs a menu
* @param text Text to display.
* @param routerLink Router link associate with your root app router
* @param isActive Indicate if current menu if active.
* @param classes Wrapper classes.
* @param dropDownItems Dropdown menu items ties to this.
*/
constructor(text: string, routerLink: string, isActive?: boolean, classes?: string[]);
```

Simple inputs

#### LoginViewModel

Login view model to be used in login form component.
```
/**
 * construct a login form model.
 * @param formClass Classes' added to form
 * @param userName Login username form control associates with the form field,
 * Pass a formcontrol for customizing purpose, required will be default validator .
 * @param password Login password form control associates with the form field,
 * Pass a formcontrol for customizing purpose, required will be default validator .
 */
constructor(formClass?: string, usernameFormControl?: FormControl, passwordFormControl?: FormControl);
```

Default formControl
new FormControl('', Validators.required).

usernameFormControl: FormControl
To customize validation & the formControl state bound to username, create & pass the custom usernameFormControl.
If null it will be set as the above default formcontrol.

passwordFormControl: FormControl
To customize validation & the formControl state bound to password, create & pass the custom passwordFormControl.
If null it will be set as the above default formcontrol.

#### LoginModel
Model that login form emit onSubmit
```
/**Login username. */
username: string;
/**Login password. */
password: string;
```

Simple inputs.
