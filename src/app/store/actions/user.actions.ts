import { Action } from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const LOAD_USER = '[User] Load User';
export const LOAD_USER_FAIL = '[User] Load User FAIL';
export const LOAD_USER_SUCCESS = '[User] Load User SUCCESS';

export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public id: string) { }
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;

  constructor( public payload: any) {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;

  constructor( public user: UserModel) {}
}

export type userActions = LoadUser | LoadUserFail | LoadUserSuccess;
