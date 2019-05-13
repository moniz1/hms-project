import { FormControl, Validator, Validators } from "@angular/forms";

export class LoginViewModel {
    /**Login username form control. */
    usernameFormControl: FormControl;
    /**Login password form control. */
    passwordFormControl: FormControl;
    /**Classes' added to form */
    formClass: string;

    /**
     * construct a login form model.
     * @param formClass Classes' added to form
     * @param userName Login username form control associates with the form field,
     * Pass a formcontrol for customizing purpose, required will be default validator .
     * @param password Login password form control associates with the form field,
     * Pass a formcontrol for customizing purpose, required will be default validator .
     */
    constructor(
        formClass: string = '',
        usernameFormControl: FormControl = new FormControl('', Validators.required),
        passwordFormControl: FormControl = new FormControl('', Validators.required)
    ) {
        this.formClass = formClass;
        this.usernameFormControl = usernameFormControl;
        this.passwordFormControl = passwordFormControl;
    }
}

export class LoginModel {
    /**Login username. */
    username: string;
    /**Login password. */
    password: string;
}
