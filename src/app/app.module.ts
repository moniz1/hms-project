import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HmsLibModule } from "../../dist/hms-lib";
import { HomeComponent } from './dummies/home/home.component';
import { LinkComponent } from './dummies/link/link.component';
import { Action1Component } from './dummies/action1/action1.component';
import { Action2Component } from './dummies/action2/action2.component';
import { DividedActionComponent } from './dummies/divided-action/divided-action.component';
import { UserSettingComponent } from './dummies/user-setting/user-setting.component';
import { UserPasswordChangeComponent } from './dummies/user-password-change/user-password-change.component';
import { LoginComponent } from './dummies/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent,
    Action1Component,
    Action2Component,
    DividedActionComponent,
    UserSettingComponent,
    UserPasswordChangeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HmsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
