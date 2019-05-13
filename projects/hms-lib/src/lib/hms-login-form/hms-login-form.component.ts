import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginViewModel, LoginModel } from "./models/login-view-model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'hms-login-form',
  templateUrl: './hms-login-form.component.html',
  styleUrls: ['./hms-login-form.component.css']
})
/**Accompany with a login view model as defined to validate & initialize data
 * , LoginViewModel will be initialized as default if input's undefined
 */
export class HmsLoginFormComponent implements OnInit {
  @Input() loginViewModel: LoginViewModel;
  @Output() onSubmitEmitter = new EventEmitter();

  loginFormGroup: FormGroup;

  ngOnInit() {
    this.loginViewModel = this.loginViewModel == undefined ? new LoginViewModel() : this.loginViewModel;
    this.loginFormGroup = new FormGroup({
      username: this.loginViewModel.usernameFormControl,
      password: this.loginViewModel.passwordFormControl
    });
  }

  onSubmit() {
    let loginModel = this.loginFormGroup.value as LoginModel;
    alert(`Submitted: username: ${loginModel.username}. password: ${loginModel.password}`);
    this.onSubmitEmitter.emit(loginModel);
  }
}
