import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as usersActions from '../actions';
import {of} from 'rxjs';
import {UserService} from '../../services/user.service';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  @Effect()
  LoadUsers$ = this.actions$
    .pipe(
      ofType(usersActions.LOAD_USERS),
      switchMap( () => {
        return this.userService.getUsers()
          .pipe(
            map(users => new usersActions.LoadUsersSuccess(users)),
            catchError( error => of(new usersActions.LoadUsersFail(error)) )
            );
      })
    );

}
