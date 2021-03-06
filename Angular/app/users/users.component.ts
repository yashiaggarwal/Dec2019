import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Observable<User[]>;
  constructor(private userService : UserService) {
    this.users=userService.getUsers();
   }

  ngOnInit() {
  }

}
