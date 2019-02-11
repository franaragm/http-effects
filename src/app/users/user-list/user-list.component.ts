import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';

import * as usersActions from '../../store/actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  public user_list: UserModel[] = [];
  public loading: boolean;
  public error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('users')
      .subscribe(users => {
        this.user_list = users.users;
        this.loading = users.loading;
        this.error = users.error;
      });

    this.store.dispatch( new usersActions.LoadUsers());

    /*this.userService.getUsers()
      .subscribe( users => {
        console.log(users);
        this.user_list = users;
      });*/
  }

}
