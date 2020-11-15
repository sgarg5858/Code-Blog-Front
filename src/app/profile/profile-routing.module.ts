import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AuthGuardService} from '../auth/auth-guard.service'
const routes: Routes = [
  {path:'profile/:id',component:UserProfileComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
