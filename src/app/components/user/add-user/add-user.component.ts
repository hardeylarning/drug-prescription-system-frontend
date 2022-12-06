import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { User2 } from 'src/app/model/user2';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userName = '';
  fullName = '';
  password = '';
  phoneNumber = '';
  country = '';
  location = '';
  address = '';
  gender = '';


  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let user = new User2(
      this.fullName,
      this.userName,
      this.password,
      this.phoneNumber,
      this.country,
      this.location,
      this.address,
      this.gender
    )
    this.userService.addUser(user).subscribe((data) => {
      // this.userService.setMessage(data.message);
      this.router.navigateByUrl('/home');
    });
  }
}
