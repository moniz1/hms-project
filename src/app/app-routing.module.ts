import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./dummies/home/home.component";
import { Action1Component } from "./dummies/action1/action1.component";
import { Action2Component } from "./dummies/action2/action2.component";
import { DividedActionComponent } from "./dummies/divided-action/divided-action.component";
import { LinkComponent } from "./dummies/link/link.component";
import { UserSettingComponent } from "./dummies/user-setting/user-setting.component";
import { UserPasswordChangeComponent } from "./dummies/user-password-change/user-password-change.component";
import { LoginComponent } from "./dummies/login/login.component";


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'action1', component: Action1Component
  },
  {
    path: 'action2', component: Action2Component
  },
  {
    path: 'divied-action', component: DividedActionComponent
  },
  {
    path: 'link', component: LinkComponent
  },
  {
    path: 'user-setting', component: UserSettingComponent
  },
  {
    path: 'pass-word-change', component: UserPasswordChangeComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
