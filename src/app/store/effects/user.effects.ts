import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as userActions from '../actions';
import {of} from 'rxjs';
import {UserService} from '../../services/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  @Effect()
  LoadUser$ = this.actions$
    .pipe(
      ofType(userActions.LOAD_USER),
      switchMap( action => {

        const id = action['id'];

        return this.userService.getUserById(id)
          .pipe(
            map(user => new userActions.LoadUserSuccess(user)),
            catchError( error => of(new userActions.LoadUserFail(error)) )
          );
      })
    );

}
