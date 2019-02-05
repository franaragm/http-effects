import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';

const routes: Routes = [
  {path: 'home', component: UserListComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
