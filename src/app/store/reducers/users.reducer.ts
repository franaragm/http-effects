import {UserModel} from '../../models/user.model';
import * as fromUsers from '../actions/users.actions'

export interface UsersState {
  users: UserModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const InitState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

export function usersReducer( state = InitState, action:  fromUsers.usersActions ): UsersState{

  switch (action.type) {

    case fromUsers.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      }

    case fromUsers.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      }

    case fromUsers.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      }


    default:
      return state;
  }

}
