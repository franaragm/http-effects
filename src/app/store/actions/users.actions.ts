import { Action } from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_FAIL = '[Users] Load Users FAIL';
export const LOAD_USERS_SUCCESS = '[Users] Load Users SUCCESS';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor( public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor( public users: UserModel[]) {}
}

export type usersActions = LoadUsers | LoadUsersFail | LoadUsersSuccess;
