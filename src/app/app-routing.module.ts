import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: '', component: HomeComponent},
  {path: 'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
