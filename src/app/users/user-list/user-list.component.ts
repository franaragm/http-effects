import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  public user_list: UserModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe( users => {
        console.log(users);
        this.user_list = users;
      });
  }

}
