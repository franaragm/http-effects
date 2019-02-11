import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

import * as userActions from '../../store/actions';

import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit {

  public user: UserModel;
  public loading: boolean;
  public error: any;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new userActions.LoadUser(id));
    });

    this.store.select('user').subscribe( user => {
      this.user = user.user;
      this.loading = user.loading;
      this.error = user.error;
    });
  }

}
