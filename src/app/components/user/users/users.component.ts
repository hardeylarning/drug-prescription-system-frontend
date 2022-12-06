import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  message: string = '';

  constructor(
    private userService: UserService
  ) {
    
  }

  ngOnInit(): void {
    this.message = this.userService.getMessage();
    this.userService.setMessage('');

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });

    
  }

  protected delete(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      this.userService.setMessage('User(s) deleted successfully!')
      window.location.reload();
      this.ngOnInit();
    });
  }

}
