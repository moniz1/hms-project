import { Component } from '@angular/core';
import { LoginViewModel, LoginModel } from '../../../../dist/hms-lib';
import { FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginViewModel = new LoginViewModel('col-md-4 col-sm-6');

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(loginModel: LoginModel) {
    console.log(loginModel);
  }
}
