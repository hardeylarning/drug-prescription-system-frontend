import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  id: any;
  form!: FormGroup;
  user!: User;

  userName = '';
  fullName = '';
  phoneNumber = '';
  country = '';
  location = '';
  address = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.userService.getUser(this.id).subscribe((data) => {
        this.user = data;
        this.userName = data.userName;
        this.fullName = data.fullName;
        this.address = data.address;
        this.phoneNumber = data.phoneNumber;
        this.country = data.country;
        this.location = data.location;
        this.form = this.fb.group({
          fullName: new FormControl(this.fullName),
          userName: new FormControl(this.userName),
          address: new FormControl(this.address),
          phoneNumber: new FormControl(this.phoneNumber),
          country: new FormControl(this.country),
          location: new FormControl(this.location),
        });
      });
    });
  }

  onSubmit() {
    this.user.userName = this.form.value.userName;
    this.user.fullName = this.form.value.fullName;
    this.user.address = this.form.value.address;
    this.user.phoneNumber = this.form.value.phoneNumber;
    this.user.country = this.form.value.country;
    this.user.location = this.form.value.location;
    this.userService.updateUser(this.id, this.user).subscribe((res) => {
      this.userService.setMessage('User\'s profile updated successfully!');
      this.router.navigateByUrl('/users');
    });
  }
}
